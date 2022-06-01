import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Cancel = () => {

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
    <div id='cancel_leave'>
         {
            list.map((e)=>
            <div id='cancel_container'>
                <div><h4>{e.leave_type}</h4></div>
                <div><h4>{e.to}</h4></div>
                <div><h4>{e.Datefrom}</h4></div>
                <div><h4>{e.Dateto}</h4></div>
                <div><button>Cancel Leave</button></div>
            </div>
            )
        }
    </div>
  )
}

export default Cancel