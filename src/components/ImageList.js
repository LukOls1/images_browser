import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const ima = props.images.map(image => <ImageCard key={image.id} image={image} />);
    return <div className="image-list">{ima}</div>;
};

export default ImageList;
