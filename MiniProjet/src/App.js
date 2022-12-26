import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Blog } from './compo/Blog';
import ContactPage from './compo/ContactPage';
import { Home } from './compo/Home';
import NewTaskForm from './compo/NewTaskForm';
import TaskList from './compo/TaskList';
//import { addTask } from './compo/TaskList';




function App() {


  return (

    // <div className='container'>
    //   <Home />
    // </div>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/contact" exact element={<ContactPage/>} />
      <Route path="/blog" exact element={<Blog />} />

    </Routes>


  );
}

export default App;