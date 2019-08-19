import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class TodoList extends Component{
    constructor(props){
        super(props)
        console.log("constructor...")
        this.state={
            content :[],
            totalPages:0
        }
    }

    componentDidMount(){
        const page= this.props.match.params.page
        this.getData(page)
    }

    getData = (page) =>{
       axios.get("http://192.168.41.80:8080/todo/pages/"+page)
       .then(res =>{
           this.setState(res.data)
           console.log(res.data)
       })
    }

    render(){
        console.log("render..............")
        const page= this.props.match.params.page
    //    this.getData(page) 무한 랜더 램폭발해욧

        const {content,totalPages} = this.state

        const list = content.map(({tno,title}) => {
            return(<li key={tno}>{title}</li>)
        })

        const linkArr = []
        for(let i = 1; i <=totalPages;i++){
            linkArr.push(<Link to={`/todoList/${i}`} key= {i} onClick={()=>this.getData(i)}> {i}  </Link>)
        }
        return(
            <div>
                <h1>Todo List  {page}</h1>
               <ul>
                 {list}
               </ul>
                <div>
                    {linkArr}
                </div>
            </div>
        )
    }
}