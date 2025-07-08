import { Check } from "lucide-react";
import { FC } from "react";

interface FeedItemProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

export const FeedItem: FC<FeedItemProps> = (props) => {
  const { title, selected, onClick } = props;

  return (
    <div
      className="!py-2 !px-3 cursor-pointer hover:bg-[var(--background-tertiary)] rounded-md flex items-center justify-between"
      onClick={onClick}
    >
      <span className="text-[15px] font-[600]">{title}</span>
      {selected && <Check className="w-4 h-4" strokeWidth={3} />}
    </div>
  );
};
