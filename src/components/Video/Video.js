import React from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer className='react-player' url={props.strYoutube} />
    </div>
  );
};

export default Video;
