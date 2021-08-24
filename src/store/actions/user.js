import { USER_LOGGED_IN, USER_LOGGED_OUT} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://identitytoolkit.googleapis.com'
const API_KEY = 'AIzaSyChEOZMq83h57Gn9Px19IlsIbWFsju3Ql4'
export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = (user) => {
    return dispatch => {
        axios.post(`${authBaseURL}/v1/accounts:signUp?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => {
            console.warn(err)
        })
        .then(res => {
            console.warn(res.data)
            if(res.data.localId) {
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name,
                })
                .catch(err => console.warn(err))
                .then(res => {
                    console.warn('Usuário criado com sucesso')
                })
            }
        })
    }
}