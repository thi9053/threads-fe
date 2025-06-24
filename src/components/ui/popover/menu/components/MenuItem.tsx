import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { cn } from "@/utils/cn";

interface MenuItemProps {
  title: string;
  hasArrow?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { title, hasArrow = false, danger = false, onClick } = props;

  return (
    <div
      className="!py-2 !px-3 cursor-pointer hover:bg-[var(--background-tertiary)] rounded-md flex items-center justify-between"
      onClick={onClick}
    >
      <span className={cn("text-[15px] font-[600]", danger && "text-danger")}>
        {title}
      </span>
      {hasArrow && <ChevronRight className="w-4 h-4" />}
    </div>
  );
};
