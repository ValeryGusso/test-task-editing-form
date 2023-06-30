import { MutationTree } from "vuex";
import { DataState } from "@/store/modules/data/state";

interface Payload {
  index: number;
  value: string;
}

export enum DataMutationTypes {
  UPDATE_ITEM = "DATA/UPDATE_ITEM",
}

export type Mutations<S = DataState> = {
  [DataMutationTypes.UPDATE_ITEM](state: S, payload: Payload): void;
};

export const mutations: MutationTree<DataState> & Mutations = {
  [DataMutationTypes.UPDATE_ITEM](state: DataState, payload: Payload) {
    state.items[payload.index].value = payload.value;
  },
};
