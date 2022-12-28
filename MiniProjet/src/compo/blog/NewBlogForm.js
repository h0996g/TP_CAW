import React, { useState } from "react";


function NewBlogForm({ setBlogList, BlogL, setId, Id }) {
    const success = document.getElementById('success');
    // let SubjectValue = document.querySelector('.Subject')
    // let DescriptionValue = document.querySelector('.Description')
    // let DateValue = document.querySelector('.Date')

    // default-value-to-today//
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;
    //------------------------------------//

    const [date, setDate] = useState(today)
    const [Subject, setSubject] = useState("")
    const [Description, setDescription] = useState("")
    const [Like, setLike] = useState(0);
    // const [Dislike, setDislike] = useState(0);

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

        // if (SubjectValue.value === "" || DescriptionValue === "" || DateValue == "") {
        //     v.preventDefault();
        // }

        setBlogList([...BlogL, { id: Id, Subject: Subject, Description: Description, Date: date, like: Like }])
        setId(Id + 1);
        success.style.display = 'block';
        setDate(today)
        setDescription("")
        setSubject("")
        setTimeout(() => {

            success.style.display = 'none';
        }, 1000);
    }
    // document.getElementById('datePicker').valueAsDate = new Date();
    return (

        <form onSubmit={handleSubmit}>
            <span className="spanform">Subject </span> <div></div>  <input className="Subject" type="text" onChange={handleChangeName} value={Subject} placeholder=" Subject" required />
            <div></div>
            <span className="spanform">Description </span><div></div>  <input className="Description" type="text" onChange={handleChangePhone} value={Description} placeholder=" Description" required />
            <div></div>

            <span className="spanform">Date </span> <div></div> <input className="Date" type="date" onChange={handleChangeEmail} value={date} placeholder=" Date" required />
            <div></div>
            {/* <button onClick={handleSubmit} >Add Task</button> */}
            <input className="submit" type={"submit"} value={"Add Task"} />
            <div class="message">
                <div class="success" id="success">Blog a été créé</div>
            </div>
        </form>

    );
}




export default NewBlogForm;
