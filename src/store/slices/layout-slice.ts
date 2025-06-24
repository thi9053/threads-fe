import { StateCreator } from "zustand";
import { AppState, setAppState } from "../type";
import { DropdownMenuType } from "@/domain/layout/type";

export type LayoutSlice = {
  menuType: DropdownMenuType;
  setMenuType: (_menuType: DropdownMenuType) => void;
  resetMenuType: () => void;
};

export const createLayoutSlice: StateCreator<LayoutSlice> = (
  set: setAppState
) => ({
  menuType: "main" as DropdownMenuType,
  setMenuType: (menuType: DropdownMenuType) =>
    set({
      menuType,
    }),
  resetMenuType: () => set({ menuType: "main" }),
});

export const layoutSelectors = (state: AppState) => ({
  menuType: state.menuType,
  setMenuType: state.setMenuType,
  resetMenuType: state.resetMenuType,
});
