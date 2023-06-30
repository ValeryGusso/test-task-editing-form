import { createStore } from "vuex";
import data from "@/store/modules/data";
import { DataState } from "@/store/modules/data/state";

export interface RootState {
  data: DataState;
}

export const store = createStore<RootState>({
  modules: { data },
});
