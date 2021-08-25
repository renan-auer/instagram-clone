import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

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
        .catch(err => handleError(dispatch))
        .then(res => {
            if(res.data.localId) {
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name,
                })
                .catch(err => handleError(dispatch))
                .then(() => {
                    delete user.password
                    user.id = res.data.localId
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
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
        .catch(err => handleError(dispatch))
        .then(res => {
            if(res.data.localId) {
                axios.get(`/users/${res.data.localId}.json`)
                .catch(err => handleError(dispatch))
                .then(res => {
                    delete user.password
                    user.name = res.data.name
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}

const handleError = dispatch => {
    dispatch(setMessage({
        title: 'Erro!',
        text: 'Um erro desconhecido ocorreu!'
    }))
}