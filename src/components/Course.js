import axios from 'axios'
import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from 'reactstrap'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'

export default function Course({course, update}) {
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course Deleted Successfully");
        update(id);
      },
      (error)=>{
        toast.error("Course not Deleted || Error");
      }
    )
  }
  return (
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle style={{"font-weight": "bold"}}> {course.title} </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container>
                <Button color='danger' onClick={(e)=>{
                  deleteCourse(course.id);
                }}>Delete</Button>
                <Button color='warning' style={{'margin-left':'10px'}}>Update</Button>
            </Container>
        </CardBody>

    </Card>
  )
}
