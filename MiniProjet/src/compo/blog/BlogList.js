import { React } from "react";
import { BlogT, RowBlog } from "./RowBlog";


function BlogList({ BlogL }) {
    console.log("TaskList")
    console.log(BlogL)

    return (
        <div className="ListItems">
            <div>
                <span className="name title">Subject</span>
                <span className="phone title">Description</span>
                <span className="email title">Date</span>
            </div>

            {BlogL ? (
                BlogL.map((task, i) => (
                    <RowBlog
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
export default BlogList;
