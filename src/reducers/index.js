export default (state = [0, 0], action) => {
    console.log(action)
    switch (action.type){
        case 'INCREMENT':{
            let newState = [...state];
            newState[action.index] = state[action.index] + 1;
            return newState;
        }
        case 'DECREMENT':
        {
            let newState = [...state];
            newState[action.index] = state[action.index] - 1;
            return newState;
        }
        case 'MULTIPLE':{
            let newState = [...state];
            newState[action.index] = state[action.index] * action.multiplier;
            return newState;
        }
        case 'DIVISION':
        {
            
            let newState = [...state];
            newState[action.index] = state[action.index] / action.divisor;
            console.log(state)
            console.log(newState)
            return newState;
        }
        default:
            return state;
    }
}

