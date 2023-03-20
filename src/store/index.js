import {createStore} from "vuex"
import axios from 'axios'

const store = createStore({
    state: {
        user: {},
        authorized: !!localStorage.getItem('token'),
        notifications: []
    },
    actions:{
        async getPortfolio({commit}){
            const {data} = await axios.get('/user')
            commit('setProfile', data)
        },
        async login({commit},{state}, userData){
             try {
                 const {data} = await axios.post('/login', {
                     body: JSON.stringify(userData),
                     headers: {
                         "Content-Type": "application/json",
                     }
                 }  )
                 localStorage.setItem('token', data.token)
                 commit('setAuthorized', data.token)
             }
             catch (error) {
                 commit('setNotification', {
                    type:'error',
                    message: error.message
                 })
             }
        },
        async logout(){
            const {data} = await axios.post('/logout', {
                header: {
                    "Content-Type": "application/json"
                }
            })
            localStorage.removeItem('token')
        },
        async removeNotification({commit}, id){
            commit('deleteNotification', id)
        }
    },
    mutations:{
        setProfile(state, info){
            state.user = info;
        },
        setAuthorized(state, token){
            state.authorized = !!token
        },
        setNotification(state, notification){
            state.notifications.push(notification)
        },
        deleteNotification(state, id){
            state.notifications.splice(id, 1)
        }
    }
})
export default store