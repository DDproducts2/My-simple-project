import { combineReducers, createStore } from "redux"
export const play = () => {
    return{
        type: "PLAY"
    }
}
export const create = () => {
    return{
        type: "CREATE"
    }
}
export const join = () => {
    return{
        type: "JOIN"
    }
}
export const wait = () => {
    return{
        type: "WAIT"
    }
}
const initial = "play"
const change = (state = initial, action) => {
    switch(action.type){
        case "PLAY": return state = "play" 
        case "CREATE": return state = "create" 
        case "JOIN": return state = "join" 
        case "WAIT": return state = "wait" 
        default : return state
    }
}
const root = combineReducers({
    change
})
const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store