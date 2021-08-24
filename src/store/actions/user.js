import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyChEOZMq83h57Gn9Px19IlsIbWFsju3Ql4'

export const userLogged = user => {
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
        axios.post(`${authBaseURL}/accounts:signUp?key=${API_KEY}`, {
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

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/accounts:signInWithPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.warn(err))
        .then(res => {
            console.warn(res.data)
            if(res.data.localId) {
                axios.get(`/users/${res.data.localId}.json`)
                .catch(err => console.warn(err))
                .then(res => {
                    user.password = null
                    user.name = res.data.name
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}