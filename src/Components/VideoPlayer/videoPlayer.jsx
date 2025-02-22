import React from 'react'
import './videoPlayer.css'
import video from '../../assets/upload.mp4'


const videoPlayer = () => {
  return (
    <div className='video-player'>
        <video src={video} autoPlay muted controls>

        </video>
    </div>
  )
}

export default videoPlayer