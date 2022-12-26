import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { BlogPage } from './compo/blog/BlogPage';
import ContactPage from './compo/contact/ContactPage';
import { Home } from './compo/Home';




function App() {


  return (

    // <div className='container'>
    //   <Home />
    // </div>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="/blog" exact element={<BlogPage />} />

    </Routes>


  );
}

export default App;
