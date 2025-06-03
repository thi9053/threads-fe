import { StateCreator } from "zustand";
import { AppState, setAppState } from "../type";

export type FooSlice = {
  text: string;
  setText: (text: string) => void;
};

export const createFooSlice: StateCreator<FooSlice> = (set: setAppState) => ({
  text: "",
  setText: (text: string) => {
    set({ text });
  },
});

export const fooSelectors = (state: AppState) => ({
  text: state.text,
  setText: state.setText,
});
