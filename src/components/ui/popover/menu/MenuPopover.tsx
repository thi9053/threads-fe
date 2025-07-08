"use client";

import { Popover } from "antd";
import { AlignRight } from "lucide-react";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { layoutSelectors } from "@/store/slices/layout-slice";
import { MenuContent } from "./components/MenuContent";
import { useMemo } from "react";
import { AppearanceContent } from "./components/AppearanceContent";
import { FeedContent } from "../feed/components/FeedContent";

export const MenuPopover = () => {
  const { menuType, setMenuType } = useAppStore(useShallow(layoutSelectors));

  const content = useMemo(() => {
    if (menuType === "appearance") {
      return <AppearanceContent />;
    } else if (menuType === "feed") {
      return <FeedContent type="menu" />;
    }
    return <MenuContent />;
  }, [menuType]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setMenuType("main");
    }
  };

  return (
    <Popover
      id="menu-popover"
      content={content}
      trigger={["click"]}
      placement="topLeft"
      arrow={false}
      onOpenChange={handleOpenChange}
    >
      <AlignRight size={24} className="text-icon-secondary duration-100" />
    </Popover>
  );
};
