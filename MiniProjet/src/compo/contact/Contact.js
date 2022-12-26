import { React, useEffect, useState } from "react"
import NewContactForm from "./NewContactForm"
import ContactList from "./ContactList"

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
        return (<ContactList tList={tList} />)
    }
    if (prop.condition === false) {
        return (<NewContactForm setTList={setTList} tList={tList} />)
    }


}

export default Contact