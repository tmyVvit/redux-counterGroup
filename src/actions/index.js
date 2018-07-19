export const increment = (index)=>{
    return {
        index,
        type: "INCREMENT"
    }
}
export const decrement = (index)=>{
    return {
        index,
        type: "DECREMENT"
    }
}
export const multiple = (index, multiplier)=>{
    return {
        index,
        type: "MULTIPLE",
        multiplier
    }
}
export const division = (index, divisor)=>{
    return {
        index,
        type: "DIVISION",
        divisor
    }
}

