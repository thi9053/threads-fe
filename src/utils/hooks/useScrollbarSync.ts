import { useEffect, useRef, useCallback } from "react";

interface UseScrollbarSyncReturn {
  contentRef: React.RefObject<HTMLDivElement | null>;
  handleContentScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  handleContentWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
}

export const useScrollbarSync = (): UseScrollbarSyncReturn => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  // Update body height to match content scroll height
  const updateBodyHeight = useCallback(() => {
    if (contentRef.current) {
      const contentScrollHeight = contentRef.current.scrollHeight;
      const contentClientHeight = contentRef.current.clientHeight;
      const windowHeight = window.innerHeight;

      // Set body height to enable scrollbar when content overflows
      if (contentScrollHeight > contentClientHeight) {
        const extraHeight = contentScrollHeight - contentClientHeight;
        document.body.style.height = `${windowHeight + extraHeight}px`;
        document.body.style.minHeight = `${windowHeight + extraHeight}px`;
      } else {
        document.body.style.height = `${windowHeight}px`;
        document.body.style.minHeight = `${windowHeight}px`;
      }
    }
  }, []);

  // Sync content scroll to body scroll
  const syncContentToBody = useCallback(() => {
    if (contentRef.current && !isSyncing.current) {
      isSyncing.current = true;
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      contentRef.current.scrollTop = bodyScrollTop;
      isSyncing.current = false;
    }
  }, []);

  // Sync body scroll to content scroll
  const syncBodyToContent = useCallback(() => {
    if (contentRef.current && !isSyncing.current) {
      isSyncing.current = true;
      const contentScrollTop = contentRef.current.scrollTop;
      window.scrollTo(0, contentScrollTop);
      isSyncing.current = false;
    }
  }, []);

  // Handle content scroll events
  const handleContentScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      e.preventDefault();
      syncBodyToContent();
    },
    [syncBodyToContent]
  );

  // Handle wheel events on content
  const handleContentWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      // Redirect wheel events to body
      window.scrollBy(0, e.deltaY);
    },
    []
  );

  useEffect(() => {
    // Initial setup
    updateBodyHeight();

    // Prevent horizontal scrolling and maintain balance
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    // Listen for body scroll events
    const handleBodyScroll = () => {
      syncContentToBody();
    };

    // Listen for content mutations (height changes)
    const observer = new MutationObserver(updateBodyHeight);
    const resizeObserver = new ResizeObserver(updateBodyHeight);

    if (contentRef.current) {
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
      resizeObserver.observe(contentRef.current);
    }

    // Add event listeners
    window.addEventListener("scroll", handleBodyScroll, { passive: true });
    window.addEventListener("resize", updateBodyHeight);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleBodyScroll);
      window.removeEventListener("resize", updateBodyHeight);
      observer.disconnect();
      resizeObserver.disconnect();

      // Reset body styles
      document.body.style.height = "auto";
      document.body.style.minHeight = "auto";
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, [updateBodyHeight, syncContentToBody]);

  return {
    contentRef,
    handleContentScroll,
    handleContentWheel,
  };
};
