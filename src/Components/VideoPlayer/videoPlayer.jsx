import React, { useRef } from 'react'
import './videoPlayer.css'
import video from '../../assets/upload.mp4'


const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlayState(false);
      player.current.pause();
      player.current.currentTime = 0;  
    }

    
  }
  return (
    <div className={`video-player ${playState ? '': 'hide'}`} ref = {player}
      onClick={closePlayer}>
        <video src={video} autoPlay muted controls>

        </video>
    </div>
  )
}

export default VideoPlayer