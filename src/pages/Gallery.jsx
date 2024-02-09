import React from 'react'
import Card from '../components/Card'
import { useGlobalContext } from '../context/GlobalContext'

const Gallery = () => {
    const projects = [
        {
          id: 1,
          img: "../assets/png.png",
        },
        {
          id: 2,
          img: "../assets/png.png",
        },
        {
          id: 3,
          img: "../assets/png.png",
        },
        {
          id: 4,
          img: "../assets/png.png",
        },
        {
          id: 5,
          img: "../assets/png.png",
        },
      ];
  return (
    <div className='flex flex-col items-center justify-center mainBgColor'>
        <p>Projects</p>
        <div className='relative top-20 min-h-[100vh]'>
            {projects.map((project,i)=>{
                console.log(project)
                return <Card key={i}  project={project} projectLength={projects.length}></Card>
            })}
            <Card></Card>
        </div>
    </div>
  )
}

export default Gallery