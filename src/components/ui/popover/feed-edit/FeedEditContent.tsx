import { Columns3, Link, Link2, Pencil } from "lucide-react";

import { Button } from "antd";
import { FC } from "react";

interface FeedContentProps {
  onClose?: () => void;
}

export const FeedEditContent: FC<FeedContentProps> = (props) => {
  const { onClose } = props;

  return (
    <div className="w-[var(--popover-menu-width)]">
      <div className="p-2 border-b border-solid border-divider">
        <div className="!py-2 !px-3 cursor-pointer hover:bg-[var(--background-tertiary)] rounded-md flex items-center justify-between">
          <span className="text-[15px] font-[600]">Add as column</span>
          <Columns3 className="w-4 h-4" strokeWidth={3} />
        </div>
      </div>
      <div className="p-2">
        <div className="!py-2 !px-3 cursor-pointer hover:bg-[var(--background-tertiary)] rounded-md flex items-center justify-between">
          <span className="text-[15px] font-[600]">Edit feed</span>
          <Pencil className="w-4 h-4" strokeWidth={3} />
        </div>
        <div className="!py-2 !px-3 cursor-pointer hover:bg-[var(--background-tertiary)] rounded-md flex items-center justify-between">
          <span className="text-[15px] font-[600]">Copy link</span>
          <Link2 className="w-4 h-4" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};
