import React from 'react'
import Link from 'next/link'

const Project = ({projects}) => {
  return (
    <div className='projects'>
      {projects.map((project) => (
        <div key={project.id} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='project-links'>
              <Link href={project.link} target='_blank' className='link-btn'>
                  Go To Project
              </Link>
              <Link href={project.github} target='_blank' className='link-btn'>
                  Go To GitHub
              </Link>
            </div>
            
        </div>
      ))}
    </div>
  )
}

export default Project
