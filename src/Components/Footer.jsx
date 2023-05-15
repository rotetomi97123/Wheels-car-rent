import React from 'react';
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {AiOutlineMobile, AiOutlineMail,AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
  return (
    <Wrapper>
      <ImageBox>
        <h1>WHEELS</h1>
        <h2>Rent a car Beograd</h2>
      </ImageBox>
      <Box>
        <Flex>
          <FaMapMarkerAlt />
          <p>Gospodar Jovanova 25, Beograd</p>
        </Flex>
        <Flex>
          <AiOutlineMobile />
          <p>+381 65 123 1234</p>
        </Flex>
        <Flex>
          <AiOutlineMail />
          <p>rentacar@wheels.rs</p>
        </Flex>
        <Btn>LOKACIJA</Btn>
      </Box>
      <Box>
        <h2>Korisni linkovi</h2>
        <h3>Auto moto savez Srbije</h3>
        <h3>Kamere na putevima</h3>
        <h3>Aerodrom Nikola Tesla</h3>
        <h3>Turistička organizacija Novi Sad</h3>
        <h3>Turistička organizacija Srbije</h3>
      </Box>
      <CopyRight>
        <p>Copyright © 2023 All rights reserved | Wheels car rental</p>
      </CopyRight>
      <ScrollButton onClick={scrollToTop}><AiOutlineArrowUp /></ScrollButton>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display:flex;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    height: 100%;
  }
  
`
const Flex = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  p{
    margin-left:0.5rem;
  }
  @media (max-width: 750px){
    font-size: 1rem;
  }
`
const ScrollButton = styled.button`
position: fixed;
bottom: 2rem;
right: 2rem;
padding: 10px;
background-color: #333;
color: #fff;
border: none;
cursor: pointer;
font-size: 1.5rem;
display:flex;
justify-content:center;
align-items:center;
z-index: 100;
`;

const Box = styled.div`
  width: 30%;
  height: 100%;
  background-color: #3B3B3B;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  h2{
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 750px){
      font-size: 1.3rem;
    }
  }
  h3{
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 100;
    cursor: pointer;
    color:#2E8BC0;
    &:hover{
      color:#2E8BC0;
      transition: 0.1s ease;
    }
    @media (max-width: 750px){
      font-size: 1rem;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 30%;
    align-items:center;
    padding: 3rem 0rem;
  }
`
const ImageBox = styled.div`
    width: 40%;
    height: 100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color: #3B3B3B;
    padding-top: 1rem;
    h1{
      font-size: 5rem;
      color: white;
      @media (max-width: 750px){
        font-size: 3rem;
      }
    }
    h2{
      font-size: 1.5rem;
      color: white;
      font-weight: 400;
      @media (max-width: 750px){
        font-size: 1rem;

      }
    }
    @media (max-width: 1200px) {
      width: 100%;
      height: 40%;
    }
`
const CopyRight = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    height: 50px;
    color: white;
    background: rgba(0,0,0,0.8);
    @media (max-width: 750px){
      font-size: 0.7rem;
    }
`
const Btn = styled.button`
    font-size: 1.3rem;
    border: none;
    border-radius:1rem;
    max-width: 350px;
    padding: 0.5rem 2rem;
    color: white;
    background: #2E8BC0;
    cursor: pointer;
    &:hover{
      transition: 0.3s ease;
      opacity: 90%;
    }
`
export default Footer