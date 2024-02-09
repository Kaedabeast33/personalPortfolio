import { useState } from "react"
import React from 'react'
import {motion} from "framer-motion"

export const Card = (projectLength,project) => {
    const [focus,setFocus] = useState(false)
    console.log(project)
  return (
    <div className='flex flex-col w-[100vw] items-center justify-center '>
        <div className='p-2 w-[300px]' style={project.id==projectLength?{borderBottom:"none"}:{borderBottom:"1px solid white"}}>
            <div className='flex flex-col justify-center items-center'>
               <motion.div onClick={()=>setFocus(!focus)} className={`card   whiteColor ${focus ? "w-[100vw] h-[100vh]" : ""}`}>{project.id}</motion.div>

            </div>
        </div>
    </div>
  )
}
export default Card