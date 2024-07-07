import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player';

const VideoPlayerWithCaption = ({videoURL, captions}) => {

    const videoRef = useRef(null);
    const [currentCaption,setCurrentCaption] =useState('')

    useEffect(()=>{
        const interval = setInterval(()=>{
            const currentTime = videoRef.current?.getCurrentTime();
            if(currentTime!==null){
                const caption = captions.find((caption)=>parseFloat(caption.time)<=currentTime&& currentTime<parseFloat(caption.time) + 2)
                setCurrentCaption(caption?caption.text:'')
            }
        },500)

        return () =>clearInterval(interval)
    },[captions])


  return (
    <div>

       <ReactPlayer
       url={videoURL}
       controls
       playing={true}
       ref={videoRef}
       />
        <div className='caption'>{currentCaption}</div>
    </div>
  )
}

export default VideoPlayerWithCaption