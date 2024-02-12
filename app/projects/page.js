'use client'

import {useState, useEffect} from 'react'
import Project from '../components/project'
import {PROJECTS} from '../api/data/data'
import {Center, Flex, Text} from '@chakra-ui/react'

const ProjectsPage = () => {

  const [projects, setProjects] = useState(PROJECTS)

  console.log(projects);

  return (
    <div>
      {/* <Flex justifyContent={'center'}>
        <Text color={'white'} fontSize="30px">
        Projects
        </Text>
      </Flex> */}
      
      <Project projects={projects} />
    </div>
  )
}

export default ProjectsPage


