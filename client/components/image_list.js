// create our image list componant
// import react
import React from 'react';
import ImageDetail from './image_detail';


// create our componant
const ImageList = (props) => {
const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map( image =>
     <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list, list-group">
      {RenderedImages}
    </ul>
  );
};



// exporting the componant

export default ImageList;
