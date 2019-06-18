import * as mutation_types from "./mutation_types";
import {app} from '../main'

export default {
  [mutation_types.SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
    // [mutation_types.M_SET_LANG](state, payload) {
    //     if (state.locales[payload]) {
    //         state.locale = payload
    //     }
    // },
};
