import { Layout } from "antd";

const { Header } = Layout;

export const FeedMenu = () => {
  return (
    <Header className="w-full h-[var(--feed-height)] flex justify-between items-center !bg-[var(--background-secondary)]">
      <div className="w-[60px] h-full pl-2 flex justify-start items-center"></div>
      <div className="w-[60px] h-full pr-2 flex justify-end items-center"></div>
    </Header>
  );
};
