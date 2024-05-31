import React, { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    document.title = "Home"
  },[])
  return (
    <div>
      <header className='text-center text-primary'>
        <h1>Welcome to the Course Management System</h1>
        <p>
          This FullStack app is developed by Saifullah.
        </p>
      </header>
    </div>
  )
}
