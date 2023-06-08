import React from 'react'
import Link from 'next/link'

const Project = ({projects}) => {
  return (
    <div className='projects'>
      {projects.map((project) => (
        <div key={project.id} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.link} target='_blank' className='link-btn'>
                Go To Project
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Project
