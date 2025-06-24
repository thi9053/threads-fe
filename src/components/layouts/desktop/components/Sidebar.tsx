import { Layout } from "antd";
import { SidebarMenu } from "./SidebarMenu";
import { AtSign } from "lucide-react";
import { MenuPopover } from "@/components/ui/popover/menu/MenuPopover";

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider width={76}>
      <div className="h-full min-h-[480px] fixed top-0 left-0 flex flex-col items-center !bg-[var(--background-secondary)]">
        <div className="flex-none py-4 w-[var(--sidebar-width)] flex justify-center">
          <AtSign size={34} className="text-icon-primary" />
        </div>
        <SidebarMenu />
        <div className="flex-none mb-[22px]">
          <div className="w-[54px] h-[54px] flex justify-center items-center cursor-pointer group">
            <MenuPopover />
          </div>
        </div>
      </div>
    </Sider>
  );
};
