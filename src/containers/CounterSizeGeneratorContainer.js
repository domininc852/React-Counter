import { connect } from 'react-redux';
import CounterSizeGenerator from '../components/CounterSizeGenerator'
import { updateCounterSize, resetSum } from '../actions'

const mapDispatchToProps = dispatch => ({
    update: (size) => { dispatch(updateCounterSize(size)) },
    reset: () => { dispatch(resetSum()) }
});
const mapStateToProps = state =>({
    counterSize: state.size
})
const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;