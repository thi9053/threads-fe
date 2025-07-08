import { Button, Popover } from "antd";
import { FeedContent } from "./components/FeedContent";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FeedPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      id="menu-popover"
      content={<FeedContent onClose={() => setOpen(false)} />}
      trigger={["click"]}
      placement="bottom"
      arrow={false}
      open={open}
      onOpenChange={setOpen}
    >
      <Button
        shape="circle"
        size="small"
        icon={<ChevronDown size={12} className="size-3" />}
      />
    </Popover>
  );
};
