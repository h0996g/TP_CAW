import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


function NewContactForm({ setTList, tList }) {
    // const navigate = useNavigate()
    // let nameValue = document.querySelector('.name')
    // let phoneValue = document.querySelector('.phone')
    // let emailValue = document.querySelector('.email')
    const success = document.getElementById('success');

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
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (nameValue.value === "" || phoneValue === "" || emailValue == "") {
        //     v.preventDefault();
        // }

        setTList([...tList, { name: name, phone: phone, email: email }]);
        success.style.display = 'block';
        setName("")
        setPhone("")
        setEmail("")
        setTimeout(() => {

            success.style.display = 'none';
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="spanform">Name </span>
            <div></div>
            <input className="name" type="text" onChange={handleChangeName} value={name} placeholder=" name" required />
            <div></div>
            <span className="spanform">Phone</span>
            <div></div>
            <input className="phone" type="text" onChange={handleChangePhone} value={phone} placeholder=" phone" required />
            <div></div>

            <span className="spanform">Email </span>
            <div></div>
            <input className="email" type="text" onChange={handleChangeEmail} value={email} placeholder=" email" required />
            <div></div>
            {/* <button onClick={handleSubmit} >Add Task</button> */}
            <input className="submit" type={"submit"} value={"Add Task"} />
            <div class="message">
                <div class="success" id="success">Contact a été créé</div>
            </div>

        </form>
    );
}

export default NewContactForm;
