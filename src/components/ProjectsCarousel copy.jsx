import React, { useState,useRef, useEffect } from 'react'
import {motion,} from 'framer-motion'


const ProjectsCarousel = ({projects,num,setNum,scalex,scaley,leftClick,rightClick,classname,scrollYValue,isInTransition,doneScrolling}) => {
  
    
    
    const projectRefs=useRef([])
    // useEffect(()=>{
    //     if(projectRefs[0].current){
            
    //     }
    // })

   const handleLocation=(projectNum)=>{
        // console.log(projectNum)
        if(projectNum===num){
            if(doneScrolling){
                return "doneScrollingBig"
            }else{
                return "big"
            }
            
        }
        else if(projectNum-1===num || projectNum+1===num){
            if(doneScrolling){
                return "doneScrollingSmall"
            }else{
                return "small"
            }
        
        }

        else{
            return "hidden"
        }
    }
    const handleClick=(i)=>{
        if(i===num){
            return
        }if(i===num-1){
            return leftClick
        }
        if(i===num+1){
            return rightClick
        }else{
            return
        }
    }
  return (
    <div  className={`w-[90vw] h-[90%] gap-2  flex  justify-center ${classname}`}>
        {projects.map((project,index,arr)=>{
            return(
                <motion.div ref={(refs)=>(projectRefs.current[index]=refs)} initial={{width:"0px",height:"0px",margin:"0px 0px 0px 0px",opacity:0,transform:"translateY(0px)"}} custom={scrollYValue} key={index} variants={{
                    hidden:{
                        width:"0px",
                        height:"0px",
                        margin:"0px 0px 0px 0px",
                        transition:{duration:0.3},
                        // opacity:0,
                        // translateX:`-${num*100}%`, 
                    },
                    big:
                    {
                        opacity:1,
                        width:"55%",
                        height:"25vh",
                        transition:{duration:0.4},
                        margin:"0px auto 0px auto",
                            // scale:2
                    },
                    small:{
                        opacity:1,
                        // translateX:`-${num*100}%`,
                        width:"200px",
                        height:"25vh",
                        margin:"0px auto 0px auto",
                        transition:{duration:0.4,ease:"easeIn"},
                        x:"-100px"
                    },
                    doneScrollingBig:{
                        width:"55%",
                        height:"106%", 
                        opacity:1,
                        transition:{duration:0.5},
                        margin:"0px auto 0px auto",
                    },doneScrollingSmall:{
                        width:"200px",
                        height:"25%",
                        margin:"0px auto 0px auto",
                        opacity:1,
                        transition:{duration:0.5},
                    }
                }} animate={handleLocation(index)} transition={{duration:0}}  id={index} onClick={isInTransition?()=>{}:handleClick(index)} 
                style={handleLocation(index)==="small"?{translateY:scrollYValue}:{}}
                     className='project  transform hover:scale-110 bg-[#0044D7] '>{scrollYValue}</motion.div>
            )
        })}
    </div>
  )
}

export default ProjectsCarousel