import { Button, Popover } from "antd";
import { FeedContent } from "./FeedEditContent";
import { Ellipsis } from "lucide-react";
import { useState } from "react";

export const FeedEditPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      id="menu-popover"
      content={<FeedContent onClose={() => setOpen(false)} />}
      trigger={["click"]}
      placement="bottomRight"
      arrow={false}
      open={open}
      onOpenChange={setOpen}
    >
      <Button
        shape="circle"
        size="small"
        icon={<Ellipsis size={12} className="size-3" />}
      />
    </Popover>
  );
};
