import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

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
      <ImgWrap>
        <img src='https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='car' />
      </ImgWrap>
      <ItemContainer>
        <FlexDiv>
        <motion.div animate={controls} initial="hidden" variants={fadeIn}>
            <TextWrap>  
              <h1>RENT A CAR BEOGRAD</h1>
              <p>NEOGRANIČENA KILOMETRAŽA BEZ DEPOZITA</p>
              <h4>Već od 15€ dnevno <br/>
                  Specijalna ponuda na rentiranje od 30 dana<br/>
                  Dostava vozila na adresu<br/>
                  Zeleni karton gratis
              </h4>
            </TextWrap>
           </motion.div>
          <LogoWrap>
            <motion.div animate={controls} initial="hidden" variants={fadeIn}>
              <img src='https://i.ibb.co/QkgfgMm/Wheels-Rent-Car-1.png' alt='logo' />
            </motion.div>
          </LogoWrap>
        </FlexDiv>
      </ItemContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 82vh;
    overflow: hidden;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: center;
    }
`
const ImgWrap = styled.div`
    width: 100%;
    height: 82vh;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 82vh;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
    }
  
`
const ItemContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 82vh;
  z-index: 30;
  display:flex;
  justify-content: center;
  align-items: center;
`
const FlexDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

`
const LogoWrap = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`
const TextWrap = styled.div`

  h1{
    color:#2E8BC0;
    font-size: 4rem;
    font-weight: 600;
    @media (max-width: 700px){
        font-size: 2rem;
    }
  }
  p{
    color:white;
    font-size: 2rem;
    font-weight: 600;
    @media (max-width: 700px){
      font-size: 1rem;
    }
  }
  h4{
    margin-top: 2rem;
    color:white;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 100;
    @media (max-width: 700px){
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    padding: 1rem 1rem;
  }
`
export default Hero