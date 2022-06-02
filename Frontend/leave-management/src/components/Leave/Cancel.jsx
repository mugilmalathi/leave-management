import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Cancel = () => {

    const [list, setList] = useState([]);

    const _id = useParams()

    useEffect(()=>{
        getData();
    }, []);

    const getData = ()=>{
        axios.get("https://leave-management-backend.herokuapp.com/employee")
        .then((res)=>{
            setList(res.data)
        })
    }

    const cancelLeave =(id)=>{
        fetch(`https://leave-management-backend.herokuapp.com/employee/${id}`,{
            method: 'DELETE'
        }).then((result)=>{
            result.json().then((res)=>{
                console.warn(res);
                getData();
            })
        })
    }

  return (
    <>
    <Navbar />
    <div id='cancel_leave'>
         {
            list.map((e)=>
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