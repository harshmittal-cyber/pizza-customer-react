import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Enquiry from './pages/Enquiry/Enquiry'
import Page404 from './pages/Page404/Page404'
import Menu from './pages/Menu/Menu/ProductMenu.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/enquiry' element={<Enquiry />} />
          <Route exact path='/menu' element={<Menu />} />
        </Route>

        <Route path={'*'} element={<Page404 />} />

      </Routes>
    </Router >
  );
}

export default App;
