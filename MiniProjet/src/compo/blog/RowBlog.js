import React from 'react'

export const RowBlog = (props) => {

    return (
        <div>
            <span className='name' >
                {props.task.Subject}
            </span>
            <span className='phone' >
                {props.task.Description}
            </span>
            <span className='email'>
                {props.task.Date}
            </span>
            <button onClick={props.like} className='like'> Like :
                {props.task.like}
            </button>
            {/* <button onClick={
                props.onDelete}>x</button> */}


        </div>
        // <>ggg</>
    )
}
