import {connect} from 'react-redux';
import Counter from '../components/Counter'
import {increaseSum} from '../actions'

const mapDispatchToProps = dispatch =>({
    increase: ()=> {dispatch(increaseSum())},
});
const CounterCotainer = connect(null,mapDispatchToProps)(Counter);

export default CounterCotainer;