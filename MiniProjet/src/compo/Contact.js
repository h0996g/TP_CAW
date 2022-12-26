import {React, useEffect, useState} from "react"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

function Contact({prop}) {

    const [tList, setTList] = useState([])
    useEffect( () => {} , [tList])

    if (prop.condition === true) {
        return (<TaskList tList={tList} />)
    }
    if (prop.condition === false) {
        return (<NewTaskForm setTList= {setTList}  tList={tList} />)
    }

    
}

export default Contact