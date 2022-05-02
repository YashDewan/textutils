import React from 'react'

export default function Alert(props) {
    let capatalize = (word) => {
        let str = word[0].toUpperCase();
        return str + word.slice(1);
    }
    return (
        <div style = {{heigth : '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatalize(props.alert.type)} : {props.alert.msg}</strong>
            </div>}
        </div>
        
    )
}
