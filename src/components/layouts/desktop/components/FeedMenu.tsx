import { Button, Layout } from "antd";
import { Ellipsis } from "lucide-react";
import { FeedPopover } from "@/components/ui/popover/feed/FeedPopover";
import { FeedEditPopover } from "@/components/ui/popover/feed-edit/FeedEditPopover";

const { Header } = Layout;

export const FeedMenu = () => {
  return (
    <Header className="w-full h-[var(--feed-height)] flex justify-between items-center !bg-[var(--background-secondary)] !px-2">
      <div className="w-[60px] h-full pl-2 flex justify-start items-center"></div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold p-2">For you</p>
        <FeedPopover />
      </div>
      <div className="w-[60px] h-full pr-2 flex justify-end items-center">
        <FeedEditPopover />
      </div>
    </Header>
  );
};
