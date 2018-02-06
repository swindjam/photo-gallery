import React from 'react';
import GalleryItem from './GalleryItem';


export default ({image}) => {

  return(
    <GalleryItem {...{image}}/>
  )
}
