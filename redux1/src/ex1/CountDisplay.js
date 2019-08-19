import React,{Component} from 'react'
import CountButton from './CountButton';


export default class CountDisyplay extends Component{

    state ={count:1}

    increase = () => {
        console.log("increase")
        this.setState({count :this.state.count +1})
    }

    render(){
        return (
            <div>
            <h1>COUNT : {this.state.count}</h1>
            
            <CountButton fn={this.increase}></CountButton>
            </div>
        )
    }
}