import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { DataState } from "@/store/modules/data";

declare module "@vue/runtime-core" {
  interface RootState {
    data: DataState;
  }

  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
