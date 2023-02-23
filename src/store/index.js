import {createStore} from "vuex"

const store = createStore({
    state: {
        user: {}
    },
    actions:{
        async getPortfolio({commit}){
            const data = await fetch('/user')
            const info = await data.json()
            commit('setProfile', info)
            console.log(info)
        },
    },
    mutations:{
        setProfile(state, info){
            state.user = info;
        }
    }
})

export default store