import React from 'react';
import {connect} from 'react-redux'

let style ={
    height:"30vh",
    backgroundColor:"red",
    color:"white"
}

function Bpage (props){

    const pageStyle =Object.assign({},style,{display:props.display})

    return(
        <div style={pageStyle}>
            <h1>{props.display}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    const value = state.current
    let result = "none"
    if(value ==='ALL'|| value ==='B'){
        result = "Block"
    }
    return{display:result}

}
export default connect(mapStateToProps)(Bpage)