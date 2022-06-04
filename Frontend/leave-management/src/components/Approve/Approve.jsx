import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approve, FetchData, reject } from '../../redux/action/action';
import AdminNav from '../Navbar/AdminNav'

const Approve = () => {

    const employee = useSelector((state)=> state.employee.employee);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData())
    }, []);

    const appData = (e)=>{
        dispatch(approve(e._id))
    }
    const rejData = (e)=>{
        console.log((e));
        
        dispatch(reject(e))
    }

    // const approveLeave =(id)=>{
    //     fetch(`https://leave-backend-management.herokuapp.com/employee/${id}`,{
    //         method: 'PATCH'
    //     }).then((result)=>{
    //         result.json().then((res)=>{
    //           dispatch(FetchData());
    //         })
    //     })
    // }

  return (
    <div>
        <AdminNav />
        <div id='manager'>
            {
                employee.map((e)=>
                    <div>
                        <h1 id='head'>Leave Approval Letter</h1>
                        <p id='ldate'>Date:{e.Datefrom}</p>
                        <h2 id='lfrom'>From</h2>
                        <h4>{e.signature}</h4>
                        <h4>Software Development Engineer</h4>
                        <h4>Coimbatore</h4>
                        <h2 id='lfrom'>To</h2>
                        <h4>Mr. Abcdefgh</h4>
                        <h4>{e.to}</h4>
                        <h4>Mobiversa Private Ltd</h4>
                        <h4>Coimbatore</h4>
                        <h2 id='lfrom'>Respected Sir/Mam,</h2>
                        <h4>Sub:<span id='sub'>{e.leave_type}</span></h4>
                        <p id='lcontent'>{e.reason}</p>
                        <p id='thank'>Thank You</p>
                        <h4 id='sincere'>Yours Sincerely,</h4>
                        <h3>{e.signature}</h3>
                        <div id='decision'>
                        <button id='app' onClick={()=>appData(e)}>Approve</button>
                        <button id='rej' onClick={()=>rejData(e.employeeId)}>Reject</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Approve