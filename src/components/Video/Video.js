import React from 'react';

const src =
  "https://aa.nguonphimmoi.com/share/c74d97b01eae257e44aa9d5bade97baf";

const Video = () => {
  return (
    <video controls width="40%">
      <source src={src} type="video/OGG" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;