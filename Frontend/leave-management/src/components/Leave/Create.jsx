import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./style.css"

const Create = () => {

    const [formData, setFormData] = useState({
        leave_type:"",
        to:"",
        Datefrom:"",
        Dateto:"",
        reason:"",
        signature:""
    })

    const formSubmitter = e => {
        axios.post("https://leave-management-backend.herokuapp.com/employee", formData)
          .then(()=>{
              setFormData({
                leave_type:"",
                to:"",
                Datefrom:"",
                Dateto:"",
                reason:"",
                signature:""
              })
          })
          .then(()=>{
              getData();
          })
    }

    const [data, setData] = useState({});

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]:value
        })
    }


    useEffect(()=>{
        getData();
    }, []);

    const getData = ()=>{
        axios.get("https://leave-management-backend.herokuapp.com/employee")
        .then((res)=>{
            setData(res.data)
        })
    }

  return (
    <>
    <Navbar />
    <div id='create_leave'>
       <h2 id='leave_label'>Leave Applying Form</h2>
       <input 
          type="text" 
          id='leave_type'
          placeholder='Leave Type'
          onChange={handleChange}
          value={formData.leave_type}
          />
       <br />
       <label id='label'>To:</label>
       <input 
          type="text" 
          id="to" 
          placeholder='To who(Manager, Team Lead, ...)'
          onChange={handleChange}
          value={formData.to}
          />
       <br />
       <label id='label'>Leave From:</label>
       <input 
          type="date" 
          id="Datefrom"
          onChange={handleChange}
          value={formData.Datefrom} 
          />
       <br />
       <label id='label'>Leave To:</label>
       <input 
          type="date" 
          id="Dateto"
          onChange={handleChange}
          value={formData.Dateto} 
          />
       <br />
       <label id='label'>Leave Reason</label>
       <br />
       <textarea 
          id="reason"
          placeholder='Complete Reason'
          onChange={handleChange}
          value={formData.reason}
          ></textarea>
       <br />
       <label id='label'>Signature:</label>
       <input 
          type="test" 
          id="signature"
          placeholder='Type your Name'
          onChange={handleChange}
          value={formData.signature} 
          />
       <br />
       <button 
          id="apply" 
          onClick={formSubmitter}
          >Create Leave</button>
    </div>
    </>
  )
}

export default Create