import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";


export const BlogPage = () => {
    const [condition, setCondition] = useState(true);

    return (
        <div className="ListItems">
            <p>
                <i>Blog</i> (after chlicking on the Display Blogs button)
            </p>
            <div>
                <button onClick={(e) => { e.preventDefault(); setCondition(true) }}> Display Blogs</button>
                <button onClick={(e) => { e.preventDefault(); setCondition(false) }}>
                    Create Blogs
                </button>
                <Link to="/">Home</Link>
                <Blog prop={{ condition }} />
            </div>
            <></>
        </div>)
}
