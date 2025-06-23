"use client";

import { Layout } from "antd";
import { Sidebar } from "./components/Sidebar";
import { FeedMenu } from "./components/FeedMenu";

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="h-screen w-screen !bg-[var(--background-secondary)]">
      <Sidebar />
      <Layout className="h-full w-full px-5 flex !flex-row justify-center !bg-[var(--background-secondary)]">
        <Layout className="min-[700px]:max-[800px]:max-w-[calc(100%-var(--sidebar-width)*1.5)] min-[800px]:max-w-[var(--layout-max-width)] w-[var(--layout-max-width)] min-h-screen">
          <FeedMenu />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
