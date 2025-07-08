import { FeedOption, ThemeOption } from "./type";
import { Sun, Moon } from "lucide-react";

export const MENU_ITEMS = [
  {
    title: "Apperance",
    hasArrow: true,
  },
  {
    title: "Insights",
    hasArrow: false,
  },
  {
    title: "Settings",
    hasArrow: false,
  },
  {
    title: "divider",
  },
  {
    title: "Feeds",
    hasArrow: true,
  },
  {
    title: "Saved",
    hasArrow: false,
  },
  {
    title: "Liked",
    hasArrow: false,
  },
  {
    title: "divider",
  },
  {
    title: "Report a problem",
    hasArrow: false,
  },
  {
    title: "Log out",
    hasArrow: false,
    danger: true,
  },
];

export const THEME_OPTIONS: ThemeOption[] = [
  { value: "light", label: "Light", icon: <Sun className="w-5 h-5" /> },
  { value: "dark", label: "Dark", icon: <Moon className="w-5 h-5" /> },
  { value: "system", label: "Auto" },
];

export const DEFAULT_FEED_OPTIONS: FeedOption[] = [
  { value: "for-you", label: "For you" },
  { value: "following", label: "Following" },
];
