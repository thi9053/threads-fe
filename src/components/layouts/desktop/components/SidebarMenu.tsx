import { Heart, House, Search, Plus, User } from "lucide-react";
import { Button } from "antd";
import Link from "next/link";

export const SidebarMenu = () => {
  return (
    <div
      id="sidebar-menu"
      className="grow flex flex-col justify-center gap-1 w-[var(--sidebar-width)] px-2"
    >
      <Link href="/" passHref>
        <Button
          icon={<House size={24} className="!text-icon-secondary" />}
          type="text"
          className="w-[80px] h-[48px] my-1.5"
          size="large"
          block
        />
      </Link>
      <Link href="/" passHref>
        <Button
          icon={<Search size={24} className="!text-icon-secondary" />}
          type="text"
          className="w-[80px] h-[48px] my-1.5"
          size="large"
          block
        />
      </Link>
      <Link href="/" passHref>
        <Button
          icon={<Plus size={24} className="!text-icon-secondary" />}
          type="text"
          className="w-[80px] h-[48px] my-1.5"
          size="large"
          block
        />
      </Link>
      <Link href="/" passHref>
        <Button
          icon={<Heart size={24} className="!text-icon-secondary" />}
          type="text"
          className="w-[80px] h-[48px] my-1.5"
          size="large"
          block
        />
      </Link>
      <Link href="/" passHref>
        <Button
          icon={<User size={24} className="!text-icon-secondary" />}
          type="text"
          className="w-[80px] h-[48px] my-1.5"
          size="large"
          block
        />
      </Link>
    </div>
  );
};
