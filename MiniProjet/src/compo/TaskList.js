import { React } from "react";
import { Task } from "./Task";

function TaskList({ tList }) {
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
          <Task
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
export default TaskList;
