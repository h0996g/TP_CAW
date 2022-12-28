import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";




function ContactPage() {
  const [condition, setCondition] = useState(true);
  const navigate = useNavigate()

  return (
    <div className="ListItems" id='contact'>
      
      <p>
        <i>Contacts</i> 
      </p>
      <div id="contact button">
        <button onClick={(e) => { e.preventDefault(); setCondition(true) }}> Display Contacts</button>
        <button onClick={(e) => { e.preventDefault(); setCondition(false) }}>
          Create Contact
        </button>
        {/* <Link to="/">Home</Link> */}
        <button onClick={() => navigate('/')}> <i class="fa fa-home"></i>   Home</button>
        <Contact prop={{ condition }} />
      </div>
      <></>
    </div>)

}
export default ContactPage;
