import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { approve, FetchData } from '../../redux/action/action';
import Navbar from '../Navbar/Navbar';
import "./style.css"

const Check = () => {

    const employee = useSelector((state)=> state.employee.employee);
    // const approved = useSelector((state)=> state.approved);
    // const rejected = useSelector((state)=> state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData())
    }, []);

    
    const appData = (e)=>{
        console.log(e.approve);
        if(e.approve==true){
            e.approve=false
            alert("Rejected..!")
        }else if(e.approve==false){
            e.approve=true
            alert("Approved..!")
        }else if(e.approve==false){
            alert("Waiting..!")
        }
        dispatch(approve(e._id))
    }
    

  return (
    <>
    <Navbar />
    <div id='check_leave'>
        {
            employee.map((e)=>{
                
                return(
                    <div id='check_container'>
                        <div><h4>{e.signature}</h4></div>
                        <div><h4>{e.leave_type}</h4></div>
                        <div><h4>{e.to}</h4></div>
                        <div><h4>{e.Datefrom}</h4></div>
                        <div><h4>{e.Dateto}</h4></div>
                        <div><button onClick={()=>appData(e)}>Check Status</button></div>
                        {/* <div>{status}</div> */}
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