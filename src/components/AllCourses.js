import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify';
import Course from './Course'
import base_url from '../api/bootapi';
import axios from "axios";


export default function AllCourses() {
  useEffect(()=>{
    document.title = "View Courses";
  },[]);
  // function to call server
  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Courses has been loaded", {position: "bottom-center"})
        setCourses(response.data)
      },
      (error)=>{
        console.log(error);
      }
    )
  };

  //calling loading course function
  useEffect(()=>{
    getAllCoursesFromServer();
  },[]);

  // remove course by Id
  const updateCourses=(id)=>{
    setCourses(courses.filter((c)=> c.id != id));
  }

  const[courses, setCourses] = useState([]);
    
    return (
      <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 >All List of courses are as follows</h1>
    </div>
        {
            courses.length >0? courses.map((item)=><Course key={item.id} course ={item}/>):"No Courses"
        }
      </>
  )
}
