import { ArrowLeft } from "lucide-react";
import { FC, useState } from "react";
import { cn } from "@/utils/cn";
import { useAppStore } from "@/store";
import { layoutSelectors } from "@/store/slices/layout-slice";
import { useShallow } from "zustand/react/shallow";
import { ThemeState } from "@/domain/layout/type";
import { useTheme } from "next-themes";
import { THEME_OPTIONS } from "@/domain/layout/const";

export const AppearanceContent: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const { resetMenuType } = useAppStore(useShallow(layoutSelectors));
  const [selectedTheme, setSelectedTheme] = useState<ThemeState>(
    currentTheme as ThemeState
  );

  const handleBackClick = () => {
    resetMenuType();
  };

  const handleThemeChange = (theme: ThemeState) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between h-[52px]">
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center w-[52px] h-[52px] cursor-pointer"
        >
          <ArrowLeft className="w-[20px] h-[20px]" strokeWidth={2.5} />
        </button>
        <h2 className="text-[15px] font-[600] text-center">Appearance</h2>
        <div className="w-[52px] h-[52px]" />
      </div>

      <div className="p-4 pt-2">
        <div className="flex justify-center">
          <div
            className="relative flex bg-[var(--background-secondary)] rounded-[12px] w-full max-w-xs"
            style={{ width: 96 * THEME_OPTIONS.length }}
          >
            <div
              className="absolute h-[44px] w-[96px] rounded-[10px] border border-[var(--color-divider)] bg-[var(--background-tertiary)] transition-transform duration-200 z-10"
              style={{
                transform: `translateX(${
                  THEME_OPTIONS.findIndex(
                    (opt) => opt.value === selectedTheme
                  ) * 96
                }px)`,
              }}
            />
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleThemeChange(option.value)}
                className={cn(
                  "relative flex flex-1 items-center justify-center h-[44px] w-[96px] px-4 py-2 rounded-[10px] text-[15px] font-[500] transition-colors focus:outline-none overflow-hidden",
                  selectedTheme === option.value
                    ? "z-20 text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--background-tertiary)]"
                )}
                aria-pressed={selectedTheme === option.value}
              >
                {option.icon || option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
