import { MENU_ITEMS } from "./const";

export type DropdownMenuType = "main" | "appearance" | "feed";

export type DropdownMenuItems = {
  title: string;
  hasArrow?: boolean;
  danger?: boolean;
  onClick?: () => void;
};

export type MenuItemType = (typeof MENU_ITEMS)[number];
export type MenuSection = MenuItemType[];
