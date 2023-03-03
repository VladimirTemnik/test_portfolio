import {createStore} from "vuex"

const store = createStore({
    state: {
        user: {},
        authorized: !!localStorage.getItem('token')
    },
    actions:{
        async getPortfolio({commit}){
            const data = await fetch('/user')
            const info = await data.json()
            commit('setProfile', info)
        },
         async login({commit}, userData){
             const data = await fetch('/login', {
                 method: 'POST',
                 body: JSON.stringify(userData),
                 headers: {
                     "Content-Type": "application/json",
                 }
             }  )
             const token = await data.json()
             console.log(token )
             localStorage.setItem('token', token.token)
             commit('setAuthorized', token)
         },
    },
    mutations:{
        setProfile(state, info){
            state.user = info;
        },
        setAuthorized(state, token){
            state.authorized = !!token
        }
    }
})
export default store