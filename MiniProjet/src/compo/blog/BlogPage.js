import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Blog from "./Blog";


export const BlogPage = () => {
    const [condition, setCondition] = useState(true);
    const navigate = useNavigate()

    return (
        <div className="ListItems" id="blog">
            <p>
                <i>Blogs</i> 
            </p>
            <div>
                <button onClick={(e) => { e.preventDefault(); setCondition(true) }}> Display Blogs</button>
                <button onClick={(e) => { e.preventDefault(); setCondition(false) }}>
                    Create Blogs
                </button>
             
                <button onClick={() => navigate('/')}> <i class="fa fa-home"></i>   Home</button>
                
                <Blog prop={{ condition }} />
                
            </div>
            <></>
        </div>)
}
