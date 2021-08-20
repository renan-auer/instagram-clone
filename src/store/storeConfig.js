import {
    createStore, combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postReducer from './reducers/post'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig