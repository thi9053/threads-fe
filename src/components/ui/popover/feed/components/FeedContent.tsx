import { ArrowLeft, ChevronDown, CirclePlus, Plus } from "lucide-react";
import { FeedItem } from "./FeedItem";
import { Button } from "antd";
import { FC, useState } from "react";
import { FeedOption } from "@/domain/layout/type";
import { DEFAULT_FEED_OPTIONS } from "@/domain/layout/const";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "@/store";
import { layoutSelectors } from "@/store/slices/layout-slice";
import { cn } from "@/utils/cn";

interface FeedContentProps {
  onClose?: () => void;
  type?: "menu" | "feed";
}

export const FeedContent: FC<FeedContentProps> = (props) => {
  const { onClose, type = "feed" } = props;
  const { resetMenuType } = useAppStore(useShallow(layoutSelectors));
  const [selectedFeed, setSelectedFeed] = useState<FeedOption>(
    DEFAULT_FEED_OPTIONS[0]
  );

  const handleSelectFeed = (feed: FeedOption) => {
    setSelectedFeed(feed);
  };

  const handleBackClick = () => {
    resetMenuType();
  };

  return (
    <div className="w-[var(--popover-menu-width)]">
      <div className="flex items-center justify-between p-5 border-b border-solid border-divider">
        {type === "menu" && (
          <button
            onClick={handleBackClick}
            className="flex items-center justify-center size-5 cursor-pointer"
          >
            <ArrowLeft className="size-5" strokeWidth={2.5} />
          </button>
        )}
        <h2
          className={cn(
            "text-[20px] font-bold text-left leading-[25px] flex-1",
            type === "menu" && "pl-4"
          )}
        >
          Feeds
        </h2>
        <Button
          shape="circle"
          size="small"
          icon={
            <Plus
              size={12}
              strokeWidth={4}
              className="size-3 !text-icon-primary"
            />
          }
          className="!border-2 border-solid !border-icon-primary !flex items-center justify-center"
        />
      </div>
      <div className="p-2">
        {DEFAULT_FEED_OPTIONS.map((option, index) => (
          <FeedItem
            key={index}
            title={option.label}
            selected={selectedFeed.value === option.value}
            onClick={() => {
              handleSelectFeed(option);
              onClose?.();
            }}
          />
        ))}
      </div>
    </div>
  );
};
