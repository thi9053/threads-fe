"use client";

import { useCallback, useEffect, useState } from "react";
import { LayoutStatus } from "@/domain/layout/type";

export const useLayoutStatus = () => {
  const [layoutStatus, setLayoutStatus] = useState<LayoutStatus>("loading");

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setLayoutStatus(window.innerWidth <= 700 ? "mobile" : "desktop");
    }
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    layoutStatus,
  };
};
