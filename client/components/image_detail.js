// create our image list componant
// import react
import React from 'react';
import ImageScore from './image_score';


// create our componant
const ImageDetail = (props) => {
return (
  <li className="media-list-group-item">
   <div className= "media-left">
        <img src={props.image.link} />
   </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
        <p>{props.image.description}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </div>
  </li>

  );
};



// exporting the componant

export default ImageDetail;
