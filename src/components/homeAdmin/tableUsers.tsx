import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux"
import { showUsers, moveUser } from "../../redux/showUsers/actions"
import { RootState } from '../../redux/rootReducer';
import Delete from "@material-ui/icons/Delete"
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularUnderLoad:React.FC = (props) => {
  return <CircularProgress disableShrink />;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);


 
const SimpleTableUsers:React.FC = (props:any) =>  {
  const classes = useStyles();
  let users:any = props.users.users
  
  let roles:any = props.roles.data
  let checkUserId = (id:any) =>{
    for(let x in roles){
      for(let q in roles[x]){
        if(q == "admin"){
          let xx = roles[x][q].find((item:any) => item == id) 
          return xx
        }
      }
    }
  }
  let moveU = (id:number) => {
        const { moveUser } = props;
        moveUser(id)
  }
  
  
  
  return (
    <div>
    {users ? 
    (<Paper className={classes.root}>
          <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Remove</TableCell>
            <TableCell>User Avatar</TableCell>
            <TableCell >User Email</TableCell>
            <TableCell >User Login</TableCell>
            <TableCell >Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {users.map((user:any) => (
            <TableRow key={`${user.login}${user._id}`}>
              <TableCell component="th" scope="row">
               {
                 !checkUserId(user._id) ? 
                 <Delete
                 style={{cursor: "pointer"}}
                 onClick={(e:any) => moveU(user._id)}
               />
               : null
               } 
                

              </TableCell>
              <TableCell>
                <img style={{maxWidth:"35px"}} src={user.details.userImg} alt={`${user.login}image`}/>
              </TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.login}</TableCell>
              <TableCell >{!checkUserId(user._id) ? "User" :'Admin'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        
      
    </Paper>)
    : <CircularUnderLoad/>}
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  users: state.showUsers.Users,
  roles: state.showUsers.Roles
});

export default connect(mapStateToProps,{showUsers, moveUser})(SimpleTableUsers)