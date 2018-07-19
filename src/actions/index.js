import * as type from '../constants/ActionTypes'

export const increment = (index)=>{
    return {
        index,
        type: type.INCREMENT
    }
}
export const decrement = (index)=>{
    return {
        index,
        type: type.DECREMENT
    }
}
export const multiple = (index, multiplier)=>{
    return {
        index,
        type: type.MULTIPLE,
        multiplier
    }
}
export const division = (index, divisor)=>{
    return {
        index,
        type: type.DIVISION,
        divisor
    }
}

