import React from 'react'
import { Routes } from 'react-router';
import {
    Route
  } from "react-router-dom";
import { Home } from '../Home/Home';
import Cancel from '../Leave/Cancel';
import Check from '../Leave/Check';
import Create from '../Leave/Create';
import Navbar from '../Navbar/Navbar';

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/create" element={<Create />} />
            <Route  path="/check" element={<Check />} />
            <Route  path="/cancel" element={<Cancel />} />
        </Routes>
    </div>
  )
}

export default AllRoutes