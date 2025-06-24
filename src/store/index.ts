import { StoreApi, create } from "zustand";
import { AppState, setAppState, getAppState } from "./type";
import { createFooSlice } from "./slices/foo-slice";
import { createLayoutSlice } from "./slices/layout-slice";

export const useAppStore = create<AppState>()(
  (set: setAppState, get: getAppState, api: StoreApi<AppState>) => ({
    ...createFooSlice(set, get, api),
    ...createLayoutSlice(set, get, api),
  })
);
