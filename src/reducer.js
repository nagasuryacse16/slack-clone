export const initialState ={
    user: null,
};

const reducer = (state, action) =>{  /* state-> it is like how the data layer looks like and action-> what changes have to be done */
    console.log(action);

    switch (action.type) {
        case "SET_USER":
        return {
            ...state,
            user: action.user,
        };       
        default:
            return state
    }
};  

export default reducer;