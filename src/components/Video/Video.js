import React from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => {
  return (
    <div>
      <ReactPlayer url={props.strYoutube} />
    </div>
  );
};

export default Video;
