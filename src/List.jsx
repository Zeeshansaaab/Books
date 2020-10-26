import React from 'react'

const List = (props) => {
    return (
        <>
            <li>{props.data}</li>
            <button onClick={props.onSelect} value={props.id}>Delete</button>
        </>
    )
}
export default List;