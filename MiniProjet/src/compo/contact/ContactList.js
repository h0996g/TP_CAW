import { React } from "react";
import { RowContact } from "./RowContact";

function ContactList({ tList }) {
  console.log("TaskList")
  console.log(tList)

  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="phone title">Phone</span>
        <span className="email title">Email</span>
      </div>

      {tList ? (
        tList.map((task, i) => (
          <RowContact
            key={i}
            task={task}
          />
        ))
      ) : (
        <></>
      )}

    </div>
  );
}
export default ContactList;
