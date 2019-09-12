import { connect } from 'react-redux'
import  LoginComponent  from '../components/login/loginComponent'
import { RootState } from "../redux/rootReducer";
import  {doLogin} from '../redux/login/actions'

const mapStateToProps = (state: RootState) => ({
    data: state.login.data,
    message: state.login.message,
});

export default connect(mapStateToProps,
     {doLogin}
     )(LoginComponent)
  