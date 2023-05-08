import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logos from './data';

const companies = () => {

    const [images, setImages] = useState(Logos);
    const [currentIndex, setCurrentIndex] = useState(0);


   
  return (
    <StyledSlider>
  {images.map((item, index) => (
    <StyledImage
      key={index}
      src={item.img}
      alt={`Image ${index + 1}`}

    />
  ))}
    </StyledSlider>
  )
}
const StyledSlider = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #d2d2d2;
  white-space: nowrap;
  margin-bottom: 2rem;
  padding-left: 3rem;

`;
const StyledImage = styled.img`
  padding: 1rem 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;
export default companies