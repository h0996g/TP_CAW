import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Blog } from './Blog'
import TaskList from './TaskList'


export const Home = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>
                i am houssem eddine welcome to my page
            </h1>
            <button onClick={() => navigate('/contact')}> Contact</button>
            <button onClick={() => navigate('/blog')}> Blog</button>
            <div>
                <button onClick={() => navigate('/')}> Home</button>

            </div>
            <div>

                {/* <Link to="/contact">contact</Link>
                <div>
                    <Link to="/blog">blog</Link>
                </div> */}

            </div>
            <Routes>

                <Route path="/contact" exact element={<TaskList />} />
                <Route path="/blog" exact element={<Blog />} />
            </Routes>

        </div>
    )
}
