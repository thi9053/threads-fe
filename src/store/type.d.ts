import { StoreApi } from "zustand";
import { TestSlice } from "./slices/TestSlice";
import { DropdownSlice } from "./slices/dropdown-slice";

export type AppState = {} & TestSlice & DropdownSlice;

export type setAppState = StoreApi<AppState>["setState"];
export type getAppState = StoreApi<AppState>["getState"];
