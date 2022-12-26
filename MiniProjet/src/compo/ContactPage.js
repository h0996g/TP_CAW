import React, { useState } from "react";
import Contact from "./Contact";
import TaskList from "./TaskList";


function ContactPage() {
  const [condition, setCondition] = useState(true);

  return (
    <div className="ListItems">
      <p>
        <i>Contacts</i> (after chlicking on the Display Contacts button)
      </p>
      <div>
        <button onClick={(e) => {e.preventDefault(); setCondition(true)}}> Display Contacts</button>
        <button onClick={(e) => {e.preventDefault(); setCondition(false)}}>
          Create Contact
        </button>
        <Contact prop={{condition}}/>
      </div>
      <></>
  </div>)

}
export default ContactPage;
