import axios from "axios";
import {ref} from 'vue'
import {defineStore} from "pinia";
export const useStore = defineStore('store', ()=>{

    const user = ref({})
    const authorized = ref(!!localStorage.getItem('token'))
    const notifications = ref([])

    async function getPortfolio(){
        const {data} = await axios.get('/user')
        this.user = data
        /*commit('setProfile', data)*/
    }
    async function login(userData){
        try {
            const {data} = await axios.post('/login', {
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                }
            }  )
            localStorage.setItem('token', data.token)
            /*commit('setAuthorized', data.token)*/
            this.authorized = !!data.token
        }
        catch (error) {
            this.notifications.push({
                type:'error',
                message:error.message
            })

           /* commit('setNotification', {
                type:'error',
                message: error.message
            })*/
        }
    }
    async function logout(){
        const {data} = await axios.post('/logout', {
            header: {
                "Content-Type": "application/json"
            }
        })
        localStorage.removeItem('token')
    }
    async function removeNotification(id){
        this.notifications.splice(id, 1)
    }

    return {user, authorized, notifications, getPortfolio, logout, login, removeNotification}
})