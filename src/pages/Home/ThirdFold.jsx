import React,{useRef,useState} from 'react'
import InfiniteScroll from '../InfiniteScroll'
import { useMotionValueEvent, useScroll } from 'framer-motion';
import {motion} from 'framer-motion'

const ThirdFold = () => {
    const scrollRef = useRef(null)
    const {scrollYProgress} = useScroll({target: scrollRef, offset: ["start start", "end end"]});
    const [startAnimation,setStartAnimation] = useState(false)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        if(latest>0.38){
            setStartAnimation(true)
            
        }else{
            setStartAnimation(false)
        }
    })
   
    
    
    
  return (
    <div ref={scrollRef} className="page3 h-[300vh] shadow-lg border-[1px] relative">
        <div className='absolute top-0 left-0 w-[100vw] h-[100vh] gradientRed'></div>
    <div className='w-[100vw]  h-[100vh] overflow-hidden  sticky top-[40px] mainBgColor flex flex-col items-center shadow-lg'>
    <InfiniteScroll></InfiniteScroll>
    <p className='text-center text-3xl whiteText'>Skills</p>
    <p className='text-center  whiteText'>{startAnimation?<span>scrollup</span>:<span>scrolldown</span>}</p>
    <motion.div initial={{translateX:0}} animate={startAnimation?{translateX:"-50%"}:{translateX:"0%"}} transition={{duration:1}} className='flex absolute top-[50%] translate-y-[-50%] left-0 '>
    <div className='w-[100vw] h-[300px] flex justify-center gap-4  z-20'>
        <motion.div drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className='box bg-blue-200 h-full w-[300px]'></motion.div>
        <motion.div drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className='box bg-blue-200 h-full w-[300px]'></motion.div>
        <motion.div drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className='box bg-blue-200 h-full w-[300px]'></motion.div>
    </div>
    <div className='w-[100vw] h-[300px] flex justify-center gap-4  z-20'>
        <motion.div drag dragConstraints={{left:0,right:0,top:0,bottom:0}} className='box2 bg-red-400 h-full w-[300px]'></motion.div>
        <motion.div drag dragConstraints={{left:0,right:0,top:0,bottom:0}} className='box2 bg-red-400 h-full w-[300px]'></motion.div>
        <motion.div drag dragConstraints={{left:0,right:0,top:0,bottom:0}} className='box2 bg-red-400 h-full w-[300px]'></motion.div>
    </div>
    </motion.div>
    {/* <div className="audience absolute bottom-[100vh] h-[300px] w-[50vw] bg-slate-800 left-[50%] translate-x-[-50%]"></div> */}
    </div>
</div>
  )
}

export default ThirdFold