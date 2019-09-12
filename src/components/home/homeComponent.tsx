import React from 'react'
import "./homeComponent.css"
import ImgMediaCard from "./imageMediaCart"
import {DebounceInput} from 'react-debounce-input';
import  Search  from "@material-ui/icons/Search"
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularUnderLoad:React.FC = (props) => {
  return <CircularProgress disableShrink />;
}



export default class HomeComponent extends React.Component <any, any> {
    state: any = {
        books: [],
        value: ''
    }
    componentDidMount(){
        fetch(`http://localhost:3200/v1/books`,)
        .then(response => response.json())
        .then(booksList => this.setState(this.state.books = booksList.data))

    }
    render(){
        return(
            <div>
                {this.state.books.length && this.props.data.isLoggedIn ? 
                (
                    <div>
                    <p>Try to find a book you need</p>
                    <div
                        style={{
                            margin: "20px"
                        }}
                    >
                        <Search/>
                        <DebounceInput
                            style={{
                                borderTop: "none",
                                borderBottom: "solid 1px",
                                borderLeft: "none",
                                borderRight: "none",
                                width: "250px",
                                outline: "0",
                                padding: "5px"
                            }}
                            minLength={2}
                            debounceTimeout={300}
                            onChange={event => this.setState({value: event.target.value})} />
                    </div>
                    <div className="home-wrapper">
                        {(this.state.books.map(
                            (book: any) => {
                                if(book.body.title.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) ) {
                                    return <ImgMediaCard
                                    key = {`${book._id}+${book.body.title}`}
                                    description = {book.body.description}
                                    title = {book.body.title}
                                    img = {book.body.img}
                                    price = {`${+book.body.price} USD`}
                                    id = {book._id}

                                >
                                </ImgMediaCard>
                                }
                                
                            }
                    )) }
                    </div>
                    </div>
                )
                : <CircularUnderLoad/>}
                
            </div>
        )
    }
    
}
