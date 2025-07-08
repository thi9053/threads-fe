"use client";

import { Layout } from "antd";
import { Sidebar } from "./components/Sidebar";
import { FeedMenu } from "./components/FeedMenu";
import { useLayoutStatus } from "@/utils/hooks/useLayoutStatus";
import { useScrollbarSync } from "@/utils/hooks/useScrollbarSync";

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { layoutStatus } = useLayoutStatus();
  const { contentRef, handleContentScroll, handleContentWheel } =
    useScrollbarSync();

  if (layoutStatus === "loading") {
    return null;
  }

  return (
    <Layout className="fixed top-0 left-0 h-screen w-screen !bg-[var(--background-secondary)]">
      <Sidebar />
      <Layout className="h-full w-full px-5 flex !flex-row justify-center !bg-[var(--background-secondary)]">
        <Layout className="min-[700px]:max-[800px]:max-w-[calc(100%-var(--sidebar-width)*1.5)] min-[800px]:max-w-[var(--layout-max-width)] w-[var(--layout-max-width)] h-screen !bg-transparent">
          <FeedMenu />
          <Content
            ref={contentRef}
            className="bg-white border border-solid border-primary rounded-t-3xl pt-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
            onScroll={handleContentScroll}
            onWheel={handleContentWheel}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
