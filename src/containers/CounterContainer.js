import {connect} from 'react-redux';
import Counter from '../components/Counter'
import {increaseSum, decreaseSum} from '../actions'

const mapDispatchToProps = dispatch =>({
    increase: ()=> {dispatch(increaseSum())},
    decrease: ()=> {dispatch(decreaseSum())},
});
const CounterCotainer = connect(null,mapDispatchToProps)(Counter);

export default CounterCotainer;