import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Header() {
  return (
    <div className='text-center my-3'>
      <Card className='bg-warning'>
        <CardBody>
          <h1>
            Welcome to The Course Management Application
          </h1> 
        </CardBody>
      </Card>
      
      </div>
  )
}
