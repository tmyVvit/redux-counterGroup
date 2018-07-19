import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {increment, decrement, multiple, division} from '../actions'

const matStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: (index) => dispatch(increment(index)),
        onDecrement: (index) => dispatch(decrement(index)),
        onMultiple : (index, multiplier) => dispatch(multiple(index, multiplier)),
        onDivision : (index, divisor) => dispatch(division(index, divisor)),
        onIncrementAsync:(index, timeout)=>setTimeout(()=>{dispatch(increment(index))},timeout*1000)
    }
}

export default connect(matStateToProps, mapDispatchToProps)(Counter)