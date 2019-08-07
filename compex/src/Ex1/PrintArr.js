import React from 'react'

const PrintArr = ({arr,fn}) => {

    console.log(arr)

    const result = arr.map(({pcode,pname,price,selected}) => <li key={pcode}>{pname} {price} <input type='checkbox'defaultChecked={selected} onChange={()=>{fn({pcode})}}></input> </li>)



    return (
        <ul>
            {result}
        </ul>
    )
    
}
export default PrintArr