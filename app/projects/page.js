'use client'

import {useState, useEffect} from 'react'
import Project from '../components/project'
import {PROJECTS} from '../api/data/data'
import {Center, Flex, Text} from '@chakra-ui/react'

const ProjectsPage = () => {

  const [projects, setProjects] = useState(PROJECTS)

  return (
    <div id='project-section'>
      <Project projects={projects} />
    </div>
  )
}

export default ProjectsPage


