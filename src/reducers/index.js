import * as type from '../constants/ActionTypes'

export default (state = [0, 0], action) => {
    console.log(action)
    switch (action.type){
        case type.INCREMENT:{
            let newState = [...state];
            newState[action.index] = state[action.index] + 1;
            return newState;
        }
        case type.DECREMENT:
        {
            let newState = [...state];
            newState[action.index] = state[action.index] - 1;
            return newState;
        }
        case type.MULTIPLE:{
            let newState = [...state];
            newState[action.index] = state[action.index] * action.multiplier;
            return newState;
        }
        case type.DIVISION:
        {
            let newState = [...state];
            newState[action.index] = state[action.index] / action.divisor;
            return newState;
        }
        default:
            return state;
    }
}

