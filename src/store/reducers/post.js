import { ADD_COMMENT, ADD_POST } from "../actions/actionTypes"

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: "Rafael Pereira Filho",
            email: "rafaelprfl@gmail.com",
            image: require("../../../assets/imgs/fence.jpg"),
            comments: [{
                nickname: "João Arruda",
                comment: "Show!"
            }, {
                nickname: "Filipi dos Santos",
                comment: "Já fui ai!"
            },]
        },
        {
            id: Math.random(),
            nickname: "Luiza Pereira",
            email: "luizapereira@gmail.com",
            image: require("../../../assets/imgs/bw.jpg"),
            comments: []
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state;
    }
}

export default reducer