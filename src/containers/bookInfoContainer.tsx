import { connect } from 'react-redux'
import  BookInfo  from '../components/bookinfo/bookinfo'
import { RootState } from "../redux/rootReducer";
import { addToCart } from "../redux/addToCart/actions"

const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    id: state.addToCart.id
});

export default connect(mapStateToProps,{addToCart})(BookInfo)