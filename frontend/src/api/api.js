import axios from 'axios'

const instance = axios.instance.create({
    baseURL: 'http://localhost:6500'
})

export const api = {
    login(login, password) {
        return instance.post('/login')
    }
    //
}