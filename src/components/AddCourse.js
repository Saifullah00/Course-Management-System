import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input,Container, Button } from 'reactstrap'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

export default function AddCourse() {
    useEffect(()=>{
        document.title = "Add Course";
      },[])

      const [course, setCourse] = useState({})
      // form handler 
      const handleForm = (e)=>{
        console.log(course);
        postDataToServer(course)
        e.preventDefault();
      }
      // funct to post data on server
      const postDataToServer= (data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("sucesss");
                toast.success("Course added Successfully")
                setCourse({id:"", title:"", description:""})
            },
            (error)=>{
                console.log(error);
                console.log("Error");
                toast.error("Something went wrong")
            }
        );
      }


  return (
    <>
        <h1 className='text-center my-3'>Fill Course Details here!!</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId"> Course Id</label>
                <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="userId" 
                    id="userid"
                    onChange={(e)=>{
                        setCourse({...course, userId:e.target.value})
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="title"> Course Title</label>
                <Input 
                    type="text" 
                    placeholder="Enter Title here"  
                    id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="description"> Course Description</label>
                <Input 
                    type="textarea" 
                    placeholder="Enter description"  
                    id="description"
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}
                />
            </FormGroup>
            <Container className='text-center'>
                <Button color='success' type='submit'>Add Course</Button>
                <Button color='warning'
                 type='reset'
                 onClick={()=>{
                    setCourse({id:"", title:"", description:""})
                 }}
                 style={{'margin-left':'10px'}}>Clear</Button>
            </Container>
        </Form>  
    </>
  )
}
