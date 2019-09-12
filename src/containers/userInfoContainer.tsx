import { connect } from 'react-redux'
import  UserInfo  from '../components/userinfo/userinfo.tsx'
import { RootState } from "../redux/rootReducer";
import { doLogin } from "../redux/login/actions"
import { updateUser } from '../redux/showUsers/actions'

const mapStateToProps = (state: RootState) => ({
    userinfo: state.login
});

export default connect(mapStateToProps,{doLogin, updateUser})(UserInfo)