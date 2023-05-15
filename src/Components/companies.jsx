import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Logos from './data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const companies = () => {

    const [images, setImages] = useState(Logos);

// Moving
    const splideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.go("+1")
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);
// Moving

// Responsive
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setPerPage(1);
      } else {
        setPerPage(4);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
// Responsive

// Animation start
const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.2 });

useEffect(() => {
  if (inView) {
    controls.start('visible');
  }
}, [controls, inView]);

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};
// Animation end

  return (
    <Wrapper ref={ref}> 
      <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <Splide  ref={splideRef} options={{
          perPage,
          type: 'loop',
          arrows: false,
          pagination: false,
          drag: false,
          gap: '5rem',
          speed: 1000 
        }}>
            {images.map((item) => {
              return(
                <SplideSlide key={item.id} id={item.id}>
                  <Card>              
                      <img src={item.img} alt='kep' />                         
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
      </motion.div>
    </Wrapper>
  )
}
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow:hidden;
  position:relative;
  img{
    padding: 1rem 1rem;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`
const Wrapper = styled.div`
  position:relative;
  background-color: #d2d2d2;
  margin-top: 2rem;
`
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