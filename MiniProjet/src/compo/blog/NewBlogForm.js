import React, { useState } from "react";


function NewBlogForm({ setBlogList, BlogL }) {
    let SubjectValue = document.querySelector('.Subject')
    let DescriptionValue = document.querySelector('.Description')
    let DateValue = document.querySelector('.Date')

    const [Subject, setSubject] = useState("")
    const [Description, setDescription] = useState("")
    const [Date, setDate] = useState("")
    const [Id, setId] = useState(1);
    const [Like, setLike] = useState(0);
    const [Dislike, setDislike] = useState(0);

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

        setBlogList([...BlogL, { id: Id, Subject: Subject, Description: Description, Date: Date, like: Like, dislike: Dislike }])
        setId(Id + 1);
    }

    return (
        <form onSubmit={handleSubmit}>
            Subject  <input className="Subject" type="text" onChange={handleChangeName} value={Subject} />
            <div></div>
            Description <input className="Description" type="text" onChange={handleChangePhone} value={Description} />
            <div></div>

            Date <input className="Date" type="date" onChange={handleChangeEmail} value={Date} />
            <div></div>
            <button onClick={handleSubmit} >Add Task</button>
        </form>
    );
}




export default NewBlogForm;
