import React from 'react'

const InfiniteScroll = () => {
    const scrollers = document.querySelectorAll('.scrollingList');
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        addAnimation();
    }
    function addAnimation(){
            scrollers.forEach(scroller =>{
                scroller.setAttribute('data-animated', true);
                // const scrollerInner= scroller.querySelector('a');
                // const scrollerContent = scrollerInner.children;
                // console.log(scrollerContent)
            })
    }
  return (
<div>
    <div className='scrollingList'>
        <ul className='flex'>
                <div>
                <li className='scrollingListItem '>HTML</li>
                <li className='scrollingListItem '>CSS</li>
                <li className='scrollingListItem '>JS</li>
                <li className='scrollingListItem '>REACT</li>
                
            
            
            
        
            
                
                
            
       
       
               
                <li className='scrollingListItem bg-red-500'>HTML</li>
                <li className='scrollingListItem '>CSS</li>
                <li className='scrollingListItem '>JS</li>
                <li className='scrollingListItem '>REACT</li>
                </div>
            

            
        </ul>
    </div>
       
    <div className='scrollingList'>
        <ul className='uxscroller'>
        <div className='ux'>
        <li className='scrollingListItem '>UI/UX</li>
        <li className='scrollingListItem '>Figma</li>
                
                
            
            
            
            
                
       
        <li className='scrollingListItem '>UI/UX</li>
        <li className='scrollingListItem '>Figma</li>
                
                
            
            
            
            
                
        </div>
       
        </ul>
    </div>
    <div className='scrollingList'>
        <ul className='backendScroller'>
        <div className='backend'>
        <li className='scrollingListItem '>JAVA</li>
        <li className='scrollingListItem '>SpringBoot</li>
        <li className='scrollingListItem '>Maven</li>
        <li className='scrollingListItem '>SQL</li>
        
                
                
            
            
            
            
                
        
        
        <li className='scrollingListItem '>JAVA</li>
        <li className='scrollingListItem '>SpringBoot</li>
        <li className='scrollingListItem '>Maven</li>
        <li className='scrollingListItem '>SQL</li>
                
                
            
            
            
            
                
        </div>
       
        </ul>
    </div> 
    
</div>
  )
}

export default InfiniteScroll