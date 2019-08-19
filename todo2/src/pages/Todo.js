import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

export default class Todo extends Component{
    constructor(props){
        super()
        const {match} = props
    }
    render(){

        const {match}=this.props

        if(match.path ==='/todo'){
            return (
            <Router>
            <Redirect to='/todo/list/1'></Redirect>
            <Route path="/todo/list/:page" component={TodoList}></Route>
            <Route path="/todo/regist" component={TodoInput}></Route>
            </Router>
            )
        }

        return(
            <Router>
            <div>
                <h1>Todo</h1>
            </div>

            <Route path="/todo/list/:page" component={TodoList}></Route>
            <Route path="/todo/regist" component={TodoInput}></Route>
            </Router>
        )
    }
}