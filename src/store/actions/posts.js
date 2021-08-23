import { ADD_COMMENT, CREATING_POSTS, POST_CREATED, SET_POSTS } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        dispatch(creatingPost())
        axios.post('https://us-central1-yradie-maps.cloudfunctions.net/uploadImage', {
            image: post.image.base64
        }).then(res => {
            post.image = res.data.imageUrl.replace("&token", "&token=")
            axios.post('/posts.json', { ...post })
                .then(res => {
                    dispatch(fetchPosts())
                    dispatch(postCreated())
                })
                .catch(err => console.warn(err))
        }).catch(err => console.warn(err))

    }
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
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                dispatch(setPosts(posts.reverse()))
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POSTS
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}
