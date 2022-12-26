import { React, useEffect, useState } from "react"
import BlogList from "./BlogList";
import NewTaskBlog from "./NewBlogForm";


const getlocalBlocsItems = () => {
    let list = localStorage.getItem('BlogStorage');
    console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem('BlogStorage'))
    } else {
        return [];
    }
}

function Blog({ prop }) {
    getlocalBlocsItems()
    const [BlogL, setBlogList] = useState(getlocalBlocsItems())
    useEffect(() => {
        localStorage.setItem('BlogStorage', JSON.stringify(BlogL))

    }, [BlogL]);


    if (prop.condition === true) {
        return (<BlogList BlogL={BlogL} />)
    }
    if (prop.condition === false) {
        return (<NewTaskBlog setBlogList={setBlogList} BlogL={BlogL} />)
    }


}

export default Blog