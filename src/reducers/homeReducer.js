const initialState = 0;
const changeNumber = (state = initialState, action) => {
    if (action.type == "INCREMENT")
        return state + 1;
    else if (action.type == "DECREMENT") {
        state -= 1;
        if (state <= 0)
            return 0;
        
        return state;
    }
    return state;   
}

export default changeNumber;