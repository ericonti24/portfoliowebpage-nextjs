'use client'
import {useState, useEffect} from 'react'
import Project from '../components/project'

const ProjectsPage = () => {

  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:3000/api/projects')
    const data = await res.json()
    setProjects(data)
    console.log(projects);
  }

  useEffect(() => {
    fetchProjects()
  },[])

  return (
    <div>
      <h1>Projects Page!</h1>
      <Project projects={projects}/>
    </div>
  )
}

export default ProjectsPage
