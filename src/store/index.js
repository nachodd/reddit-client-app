import Vue from "vue"
import Vuex from "vuex"

import app from "./modules/app"
import reddit from "./modules/reddit"

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app,
      reddit,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  return Store
}
