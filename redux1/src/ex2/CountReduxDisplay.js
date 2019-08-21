
import React from 'react';
import {connect} from 'react-redux'

function CountReduxDisplay(props){
    return(
        <div>
            <h1>redux Count : {props.count} </h1>

        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log(state,"mapstate..~~~");
    
    return{count:state.count}
}

export default connect(mapStateToProps)(CountReduxDisplay)