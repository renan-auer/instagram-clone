import { ADD_COMMENT, CREATING_POSTS, POST_CREATED, SET_POSTS } from "./actionTypes"
import axios from 'axios'
import { setMessage } from './message'

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
                .catch(err => handleError(dispatch))
        }).catch(err => handleError(dispatch))

    }
}

const handleError = dispatch => {
    dispatch(setMessage({
        title: 'Erro!',
        text: 'Um erro desconhecido ocorreu!'
    }))
}

export const addComment = payload => {
    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(err => handleError(dispatch))
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json`, { comments })
                .catch(err => handleError(dispatch))
                .then(res => {
                    dispatch(fetchPosts())
                })
            })
    }
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
            .catch(err => handleError(dispatch))
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
