import React, {Component, Fragment} from 'react'
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';

export default class Counter extends Component{
   
   constructor(){
       super()
       this.state = {
           count:0
       }
   }

   increas = (amount) => {
       
       this.setState(
           {count:this.state.count +amount}

       )
   }
   
    render(){
        return(
            <Fragment>
                <CounterDisplay count={this.state.count}></CounterDisplay>
                <CounterButton fn={this.increas} amount={1} text={'add'}></CounterButton>
                <CounterButton fn={this.increas} amount={-1} text={'min'}></CounterButton>
            </Fragment>
        )
    }
}