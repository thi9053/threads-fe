import { StoreApi } from "zustand";
import { TestSlice } from "./slices/TestSlice";
import { LayoutSlice } from "./slices/layout-slice";

export type AppState = {} & TestSlice & LayoutSlice;

export type setAppState = StoreApi<AppState>["setState"];
export type getAppState = StoreApi<AppState>["getState"];
