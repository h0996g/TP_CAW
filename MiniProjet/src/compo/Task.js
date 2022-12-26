import React from 'react'

export const Task = (props) => {

    return (
        <div>
            <span className='name' >
                {props.task.name}
            </span>
            <span className='phone' >
                {props.task.phone}
            </span>
            <span className='email'>
                {props.task.email}
            </span>
            {/* <button onClick={
                props.onDelete}>x</button> */}


        </div>
    )
}
