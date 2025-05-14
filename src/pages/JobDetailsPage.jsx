import React from 'react'
import JobDetails from '../components/JobDetails'
import Navbar from '../components/Navbar'

const JobDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <JobDetails />
    </div>
  )
}

export default JobDetailsPage