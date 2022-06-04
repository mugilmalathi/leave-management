import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FetchData } from '../../redux/action/action';
import Navbar from '../Navbar/Navbar';

const Cancel = () => {

    const employee = useSelector((state)=> state.employee.employee);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData())
    }, []);


    const cancelLeave =(id)=>{
        fetch(`https://leave-backend-management.herokuapp.com/employee/${id}`,{
            method: 'DELETE'
        }).then((result)=>{
            result.json().then((res)=>{
                console.warn(res);
                dispatch(FetchData())
            })
        })
    }

  return (
    <>
    <Navbar />
    <div id='cancel_leave'>
         {
            employee.map((e)=>
            <div id='cancel_container'>
                <div><h4>{e.signature}</h4></div>
                <div><h4>{e.leave_type}</h4></div>
                <div><h4>{e.to}</h4></div>
                <div><h4>{e.Datefrom}</h4></div>
                <div><h4>{e.Dateto}</h4></div>
                <div><button onClick={()=>cancelLeave(e._id)}>Cancel Leave</button></div>
            </div>
            )
        }
    </div>
    </>
  )
}

export default Cancel