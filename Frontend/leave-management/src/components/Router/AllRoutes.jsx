import React from 'react'
import { Routes } from 'react-router';
import {
    Route
  } from "react-router-dom";
import Account from '../Account/Account';
import { Home } from '../Home/Home';
import Cancel from '../Leave/Cancel';
import Check from '../Leave/Check';
import Create from '../Leave/Create';
import AdminNav from '../Navbar/AdminNav';
import Navbar from '../Navbar/Navbar';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/create" element={<Create />} />
            <Route  path="/check" element={<Check />} />
            <Route  path="/cancel" element={<Cancel />} />
            <Route  path="/account" element={<Account />} />
            <Route  path="/navbar" element={<Navbar />} />
            <Route  path="adminnav" element={<AdminNav />} />
        </Routes>
    </div>
  )
}

export default AllRoutes