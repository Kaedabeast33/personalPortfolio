import React from 'react'

const Tv = () => {
  return (
    <div className="absolute max-h-[240px] z-50 w-[90%] text-center p-5 gap-2 rounded-lg flex flex-col h-fit bg-[#f5f5f5] sm:tv  overflow-y-auto">
    <img></img>
    <p className="mainTextColor text-[12px] sm:text-[18px]">
      I am a freelance UX/UI designer and full stack software developer. I
      specialize in developing online services from the ground up. From
      ideation to proto-type. Help me get started building your dream
      product!{" "}
    </p>

    <p className="mainTextColor text-[12px] sm:text-[18px]">
      My skills include <span className="font-bold">Figma</span>{" "}
      prototyping, <span className="font-bold">React</span> Front-End
      dev., <span className="font-bold">Java </span>
      Springboot backend dev.
    </p>
    <button className="btn ">contact me</button>
  </div>
  )
}

export default Tv