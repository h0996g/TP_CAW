import { React, useEffect, useState } from "react"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

const getlocalItems = () => {
    let list = localStorage.getItem('sharedpreferences');
    console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem('sharedpreferences'))
    } else {
        return [];
    }
}

function Contact({ prop }) {
    getlocalItems()
    const [tList, setTList] = useState(getlocalItems())
    useEffect(() => {
        localStorage.setItem('sharedpreferences', JSON.stringify(tList))

    }, [tList]);


    if (prop.condition === true) {
        return (<TaskList tList={tList} />)
    }
    if (prop.condition === false) {
        return (<NewTaskForm setTList={setTList} tList={tList} />)
    }


}

export default Contact