let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
let authReducer = function(state = initialState, action) {
    switch(action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "LOGOUT":
                return {
                    ...state,
                    isAuth: false
                }
        default: return state;
    }
}

export const setUserData = (userId, email, login) => ({type:"SET-USER-DATA", data: {userId, email, login}});
export const logout = () => ({type:"LOGOUT"});

export default authReducer;