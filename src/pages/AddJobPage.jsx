import React from 'react'
import AddJob from '../components/AddJob'
import Navbar from '../components/Navbar'

const AddJobPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <AddJob />
    </div>
  )
}

export default AddJobPage