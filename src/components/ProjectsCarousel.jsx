import React, { useState,useRef, useEffect } from 'react'
import {motion} from 'framer-motion'


const ProjectsCarousel = ({projects,num,setNum,scalex,scaley,leftClick,rightClick,classname,scrollYValue,isInTransition,doneScrolling}) => {
  
    
    
    const projectRefs=useRef([])
    // useEffect(()=>{
    //     if(projectRefs[0].current){
            
    //     }
    // })

   
    const handleLocation=(projectNum)=>{
        
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
    <div  className={`flex w-[90vw] h-[90%]  justify-center ${classname}`}>
        {projects.map((project,index,arr)=>{
            (handleLocation(index))
            return(
                // <div className='w-full h-full'>
                <motion.div  ref={(refs)=>(projectRefs.current[index]=refs)} key={index} variants={{
                    hidden:{
                        width:"0px",
                        height:"0px",
                        margin:"0px 0px 0px 0px",
                        transition:{duration:0.3},
                        opacity:0,
                        
                        // translateX:`-${num*100}%`, 
                    },
                    big:
                    {
                        opacity:1,
                        // width:scalex,
                        // height:scaley,
                        height:"35vw",
                        width:"35vw",
                        transition:{duration:0.4},
                        margin:"0px auto 0px auto",
                            // scale:2
                    },
                    small:{
                        opacity:1,
                        // translateX:`-${num*100}%`,
                        width:"15vw",
                        height:"15vw",
                        margin:"0px auto 0px auto",
                        transition:{duration:0.4,ease:"easeIn"},
                        // x:"-100px"
                    },
                    doneScrollingBig:{
                        width:"80vw",
                        height:"106vh", 
                        opacity:1,
                        transition:{duration:.6},
                        margin:"0px auto 0px auto",
                    },doneScrollingSmall:{
                        width:"15vw",
                        height:"15vw",
                        margin:"0px auto 0px auto",
                        opacity:1,
                        transition:{duration:0.5},
                    }
                }} initial="hidden"  animate={handleLocation(index)} transition={{stiffness: 200}} style={handleLocation(index)==="small"?{translateY:scrollYValue}:{}} id={index} onClick={isInTransition?()=>{}:handleClick(index)}  className={handleLocation(index)==="small"?`project  bg-[#0044D7]   sm:min-h-[15vh] sm:max-h-[35vh] `:handleLocation(index)==="doneScrollingBig"?`project  bg-[#0044D7] min-w-[50vw] min-h-[82vh] sm:max-h-[82vh] sm:min-h-[45vh] sm:max-w-[50vw]`:handleLocation(index)==="doneScrollingSmall"?` project max-w-[5vw] sm:max-w-[15vw] bg-[#0044D7] mx-2 min-h-[80vh] mx-[20px] sm:block sm:min-h-[15vh] sm:max-h-[25vh] sm:max-h-[40vh]`:`project  bg-[#0044D7] max-h-[40vh] `}>{project.id}</motion.div>
                // </div>
            )
        })}
    </div>
  )
}

export default ProjectsCarousel