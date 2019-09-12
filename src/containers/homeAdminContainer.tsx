import { connect } from 'react-redux'
import  HomeAdminComponent  from '../components/homeAdmin/homeAdminComponent'
import { RootState } from "../redux/rootReducer";
import { showBooks } from "../redux/showBooks/actions"
import { showUsers } from "../redux/showUsers/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.showBooks.Books,
    users: state.showUsers.Users,
    roles: state.showUsers.Roles,
    data: state.login.data,
});


export default connect(mapStateToProps,{showBooks, showUsers})(HomeAdminComponent)