import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";



function ContactPage() {
  const [condition, setCondition] = useState(true);

  return (
    <div className="ListItems">
      <p>
        <i>Contacts</i> (after chlicking on the Display Contacts button)
      </p>
      <div>
        <button onClick={(e) => { e.preventDefault(); setCondition(true) }}> Display Contacts</button>
        <button onClick={(e) => { e.preventDefault(); setCondition(false) }}>
          Create Contact
        </button>
        <Link to="/">Home</Link>
        <Contact prop={{ condition }} />
      </div>
      <></>
    </div>)

}
export default ContactPage;
