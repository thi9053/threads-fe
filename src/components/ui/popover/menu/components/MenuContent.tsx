import { FC } from "react";
import { MENU_ITEMS } from "@/domain/layout/const";
import { MenuItem } from "./MenuItem";
import { MenuItemType, MenuSection } from "@/domain/layout/type";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { layoutSelectors } from "@/store/slices/layout-slice";

interface MenuContentProps {}

export const MenuContent: FC<MenuContentProps> = () => {
  const { setMenuType } = useAppStore(useShallow(layoutSelectors));

  const menuSections: MenuSection[] = [];
  let currentSection: MenuSection = [];

  MENU_ITEMS.forEach((item) => {
    if (item.title === "divider") {
      if (currentSection.length > 0) {
        menuSections.push(currentSection);
        currentSection = [];
      }
    } else {
      currentSection.push(item);
    }
  });

  if (currentSection.length > 0) {
    menuSections.push(currentSection);
  }

  const handleClick = (item: MenuItemType) => {
    switch (item.title) {
      case "Apperance":
        setMenuType("appearance");
        break;
    }
  };

  return (
    <div className="w-[var(--popover-menu-width)]">
      {menuSections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="p-2 border-b border-solid border-divider"
        >
          {section.map((item, itemIndex) => (
            <MenuItem
              key={itemIndex}
              title={item.title}
              hasArrow={item.hasArrow}
              danger={item.danger}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
