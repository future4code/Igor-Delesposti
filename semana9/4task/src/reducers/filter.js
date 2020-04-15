

const initialState = {
    filter: "none"
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            
            return {...state, filter: action.payload.filter}

        default:
            return state;

    }
}
export default filter;