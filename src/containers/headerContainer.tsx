import { connect } from 'react-redux'
import  HeaderComponent  from '../components/header/headerComponent'
import { RootState } from "../redux/rootReducer";


const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    bookId: state.addToCart.id,
    
});

export default connect(mapStateToProps)(HeaderComponent)
  