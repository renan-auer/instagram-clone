import { ADD_COMMENT, SET_POSTS } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseUrl: 'https://us-central1-yradie-maps.cloudfunctions.net',
            method: "POST",
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.warn(err))
            .then(res => {
                post.image = res.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .then(res => {
                        console.warn(res)
                    })
                    .catch(err => console.warn(err))
            })

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

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
        .catch(err => console.warn(err))
        .then(res => {
            const rawPosts = res.data
            const posts = []
            for(let key in rawPosts) {
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }
            dispatch(setPosts(posts))
        })
    }
}