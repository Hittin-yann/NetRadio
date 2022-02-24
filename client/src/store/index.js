import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token : "",
        member : false,
        status : ""
    },
    mutations: {
        setToken(state,token){
            state.token = token
        },
        adjustMember(state,adjustement){
            state.member = adjustement.member,
            state.status = adjustement.status
        }
    },
    actions: {},
    modules: {}
})