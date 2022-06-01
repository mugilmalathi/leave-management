import React from 'react'
import { Routes } from 'react-router';
import {
    Route
  } from "react-router-dom";
import { Home } from '../Home/Home';
import Create from '../Leave/Create';
import Navbar from '../Navbar/Navbar';

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/create" element={<Create />} />
        </Routes>
    </div>
  )
}

export default AllRoutes