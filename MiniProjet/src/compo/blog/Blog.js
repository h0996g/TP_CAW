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
const getlocalIdItems = () => {
    let list = localStorage.getItem('Id');
    console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem('Id'))
    } else {
        return 1;
    }
}

function Blog({ prop }) {
    getlocalBlocsItems()
    getlocalIdItems()
    const [BlogL, setBlogList] = useState(getlocalBlocsItems())
    const [Id, setId] = useState(getlocalIdItems());

    console.log("filter");

    // pour sort it by Date
    BlogL.sort((a, b) =>
        a.Date.split('/').reverse().join().localeCompare(b.Date.split('/').reverse().join()));
    console.log(BlogL);

    useEffect(() => {
        // save in localStorage (sort it by Date) 
        localStorage.setItem('BlogStorage', JSON.stringify(BlogL))

    }, [BlogL]);
    useEffect(() => {
        // save in localStorage (sort it by Date) 
        localStorage.setItem('Id', JSON.stringify(Id))

    }, [Id]);


    if (prop.condition === true) {
        return (<BlogList BlogL={BlogL} setBlogList={setBlogList} />)
    }
    if (prop.condition === false) {
        return (<NewTaskBlog setBlogList={setBlogList} BlogL={BlogL} setId={setId} Id={Id} />)
    }


}

export default Blog