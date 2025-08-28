import React from 'react'
import { getAllProjects } from '@/services'
import AllProjects from '@/components/Projects/AllProjects'



const page = async () => {
  const projects = await getAllProjects()

  return (
    <div>
      <AllProjects projects={projects} />
    </div>
  )
}

export default page
