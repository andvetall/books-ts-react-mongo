import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/addToCart/actions';

const CircularUnderLoad:React.FC = (props) => {
  return <CircularProgress disableShrink />;
}


class BookInfo extends React.Component<any, any>{
    state:any ={
        book: {},
        id: this.props.location.pathname.slice(10)
    }
  
    
    request( method: string, url: string, body?: object) {
        return (fetch(`http://localhost:3200/v1/${url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(response => response.json())
                .then(res => this.setState({book: res.data.body}))
        );
    }

    componentDidMount(){
        this.request('GET', `books/${this.state.id}`)
    }
render(){
    let addItem = (id:any) => {
        const { addToCart } = this.props
        addToCart( id ) ;
    }
    return(
           <div>
               {this.state.book ? 
               (
                <div style={{
                    width: "50%",
                    margin: "-20px auto",
                    padding: "100px 50px",
                    boxShadow: "0px 0px 28px 0px"
                }}>
                    <img 
                        style={{width: "400px", margin: "0 0 50px 0"}}
                        src={this.state.book.img} 
                        alt={this.state.book.title}
                    />
                    <h1><span>{this.state.book.title}</span></h1>
                    <h2>{this.state.book.price}</h2>
                    <p
                        style={{
                            width: "70%",
                            margin: "-40px auto",
                            padding: "100px 50px",
                            lineHeight: "43px"
                        }}
                    >{this.state.book.description}</p>
                    <span>
                        <Button 
                        style={{
                            margin: "20px"
                        }}
                        variant="outlined" color="primary" >
                           <Link
                            style = {{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                           to="/home"> Go Back</Link>
                        </Button>
                    </span>
                    
                    <span>
                        <Button
                        onClick = {() => addItem(this.state.id)}
                        variant="outlined" color="primary">
                            Add To Cart
                        </Button>
                    </span>             
                </div>
               ) : <CircularUnderLoad/>
                }
           </div>
        
    
)
}
   
      
 }
 export default connect(null, { addToCart })(BookInfo)