import { ADD_POST, ADD_COMMENT } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .then(res => {
                console.warn(res)
            })
            .catch(err => console.warn(err))
    }
    /*
    return {
        type: ADD_POST,
        payload: post
    }
    */
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}