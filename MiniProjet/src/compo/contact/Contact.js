import { React, useEffect, useState } from "react"
import NewContactForm from "./NewContactForm"
import ContactList from "./ContactList"
import Filter from "./Filter";

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
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('sharedpreferences', JSON.stringify(tList))

    }, [tList]);

    const filterNames = (name) => {
        setFilter(name);
    };
    const namesHandler = () => {
        if (filter.length !== 0) {
            return tList.filter((el) => el.name.includes(filter));
        }
        return tList;
    };

    if (prop.condition === true) {

        return (
            <div>
                <Filter filteration={filterNames} />

                <ContactList tList={namesHandler()} />

            </div>
        )

    }
    if (prop.condition === false) {
        return (

            <NewContactForm setTList={setTList} tList={tList} />

        )
    }


}

export default Contact