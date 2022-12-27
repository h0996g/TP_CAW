import { React } from "react";
import { BlogT, RowBlog } from "./RowBlog";


function BlogList({ BlogL, setBlogList }) {

    console.log(BlogL)
    const AddLike = (id) => {
        setBlogList(BlogL.map((BlogL) => {
            if (BlogL.id === id) {
                return {
                    ...BlogL,
                    like: BlogL.like + 1
                }
            } else {
                return BlogL;
            }
        }))
    }
    const AddDislike = (id) => {
        setBlogList(BlogL.map((BlogL) => {
            if (BlogL.id === id) {
                return {
                    ...BlogL,
                    dislike: BlogL.dislike + 1
                }
            } else {
                return BlogL;
            }
        }))
    }

    return (
        <div className="ListItems">
            <div>
                <span className="name title">Subject</span>
                <span className="phone title">Description</span>
                <span className="email title">Date</span>
                <span className="like title"></span>
            </div>

            {BlogL ? (
                BlogL.map((task) => (
                    <RowBlog
                        key={task.id}
                        task={task}
                        like={() => AddLike(task.id)}
                        dislike={() => AddDislike(task.id)}
                    />
                ))
            ) : (
                <></>
            )}

        </div>
    );
}
export default BlogList;
