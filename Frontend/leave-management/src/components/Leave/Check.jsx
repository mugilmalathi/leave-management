import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/action';
import Navbar from '../Navbar/Navbar';
import "./style.css"

const Check = () => {

    const employee = useSelector((state)=> state.employee.employee);
    console.log(employee)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData())
    }, []);


  return (
    <>
    <Navbar />
    <div id='check_leave'>
        {
            employee.map((e)=>{
                var status;
                if(e.approve==false){
                    status = "Waiting for manager to view..!"
                }else if(e.approve=='1'){
                    status = "Approved"
                }else{
                    status = "rejected"
                }
                return(
                    <div id='check_container'>
                    <div><h4>{e.signature}</h4></div>
                    <div><h4>{e.leave_type}</h4></div>
                    <div><h4>{e.to}</h4></div>
                    <div><h4>{e.Datefrom}</h4></div>
                    <div><h4>{e.Dateto}</h4></div>
                    <div><button>Check Status</button></div>
                    <div>{status}</div>
                    </div>
                )
            }
            )
        }
    </div>
    </>
  )
}

export default Check