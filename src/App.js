import './App.css';
import Layout from "./components/Layout"

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// The following is how we define our pages so App.js has less clutter
import HelperPages from "./tools/HelperPages"




function App() {

  // Make a list of all the public pages
  
  return (
    <Router>
    <Layout>
      <Routes>
        {
          // The following just does a bunch of mapping to make things stupid proof
        HelperPages.getPublicPages().map((page) => (
          <Route path={page.path} element={page.compo } /> 
        ))
        }
        </Routes>
    </Layout>
    </Router>
  );
}

export default App;
// TODO, make this a list so it is cleaner to deal with

// Make pub pages used in header to be the same so we have one spot to change