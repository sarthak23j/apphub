import React from "react";

const imageContext = require.context('../Assets',false,/\.(png|jpe?g|svg)$/)

const ImageContexts = ({imageName, cls}) =>{
    let imgSrc

    try {
        imgSrc = imageContext(`./${imageName}.png`);
    } catch(err){
        console.warn(`Image ${imageName} not found`);
        imgSrc = null;
    }

    return imgSrc
        ? <img className={cls} src={imgSrc} alt={imageName} />
        : <p>Image not found</p>;
}

export default ImageContexts