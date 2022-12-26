import React, { useState } from "react";


function NewBlogForm({ setBlogList, BlogL }) {
    let SubjectValue = document.querySelector('.Subject')
    let DescriptionValue = document.querySelector('.Description')
    let DateValue = document.querySelector('.Date')

    const [Subject, setSubject] = useState("")
    const [Description, setDescription] = useState("")
    const [Date, setDate] = useState("")

    const handleChangeName = (e) => {
        setSubject(
            e.target.value
        )
    }
    const handleChangePhone = (e) => {
        setDescription(
            e.target.value
        )
    }
    const handleChangeEmail = (e) => {
        setDate(
            e.target.value
        )
    }
    const handleSubmit = (e, v) => {
        e.preventDefault();

        if (SubjectValue.value === "" || DescriptionValue === "" || DateValue == "") {
            v.preventDefault();
        }

        setBlogList([...BlogL, { Subject: Subject, Description: Description, Date: Date }])
    }

    return (
        <form onSubmit={handleSubmit}>
            name  <input className="Subject" type="text" onChange={handleChangeName} value={Subject} />
            <div></div>
            phone <input className="Description" type="text" onChange={handleChangePhone} value={Description} />
            <div></div>

            email <input className="Date" type="text" onChange={handleChangeEmail} value={Date} />
            <div></div>
            <button onClick={handleSubmit} >Add Task</button>
        </form>
    );
}




export default NewBlogForm;
