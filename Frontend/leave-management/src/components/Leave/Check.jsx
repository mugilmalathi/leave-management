import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import "./style.css"

const Check = () => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        getData();
    }, []);

    const getData = ()=>{
        axios.get("https://leave-management-backend.herokuapp.com/employee")
        .then((res)=>{
            setList(res.data)
        })
    }


  return (
    <>
    <Navbar />
    <div id='check_leave'>
        {
            list.map((e)=>
            <div id='check_container'>
                <div><h4>{e.signature}</h4></div>
                <div><h4>{e.leave_type}</h4></div>
                <div><h4>{e.to}</h4></div>
                <div><h4>{e.Datefrom}</h4></div>
                <div><h4>{e.Dateto}</h4></div>
                <div><button>Check Status</button></div>
                <div><p>Approved</p></div>
            </div>
            )
        }
    </div>
    </>
  )
}

export default Check