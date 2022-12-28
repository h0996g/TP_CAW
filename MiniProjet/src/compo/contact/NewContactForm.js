import React, { useState } from "react";


function NewContactForm({ setTList, tList }) {
    let nameValue = document.querySelector('.name')
    let phoneValue = document.querySelector('.phone')
    let emailValue = document.querySelector('.email')

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeName = (e) => {
        setName(
            e.target.value
        )
    }
    const handleChangePhone = (e) => {
        setPhone(
            e.target.value
        )
    }
    const handleChangeEmail = (e) => {
        setEmail(
            e.target.value
        )
    }
    const handleSubmit = (e, v) => {
        e.preventDefault();

        if (nameValue.value === "" || phoneValue === "" || emailValue == "") {
            v.preventDefault();
        }

        setTList([...tList, { name: name, phone: phone, email: email }])
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="spanform">Name </span> <div></div> <input className="name" type="text" onChange={handleChangeName} value={name} placeholder=" name" />
            <div></div>
             <span className="spanform">Phone</span> <div></div> <input className="phone" type="text" onChange={handleChangePhone} value={phone} placeholder=" phone" /> 
            <div></div>

             <span className="spanform">Email </span> <div></div> <input className="email" type="text" onChange={handleChangeEmail} value={email} placeholder=" email" /> 
            <div></div>
            <button onClick={handleSubmit} >Add Task</button>
        </form>
    );
}




export default NewContactForm;
