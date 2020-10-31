let initialState = {
    messages: [{
        sender: "bot",
        message: "Привет, я правовой помощник Enterpreneural, помогу вам решить вопросы в области права"
    }],
}
let chatReducer = function(state = initialState, action) {
    switch(action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages,action.data.message],
            }
        default: return state;
    }
}

export const addMessage = (message) => ({type:"ADD-MESSAGE", data: {message}});
export default chatReducer;