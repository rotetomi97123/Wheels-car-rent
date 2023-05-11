import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'
import { Cars } from './data'
import { IoIosPricetag } from 'react-icons/io'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Popular = () => {

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
    <div ref={ref}>
        <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <TopDiv>
            <h1>AUTOMOBILI IZ NAŠE PONUDE</h1>
            <Flex>
                <Line />
                <AiFillCar size={30} />
                <Line />
            </Flex>
        </TopDiv>
        <MainDiv>
            <Box>
                {Cars.map((item,index) => {
                    return(
                        <ItemWrap>
                                <img src={item.img} alt={item.name}  />
                                <FlexDiv>
                                    <NameDiv>
                                        <h1>{item.name}</h1>
                                        <h2>{item.type}</h2>
                                    </NameDiv>
                                    
                                    <PriceDiv>
                                        <IoIosPricetag size={25} color='#2E8BC0' />
                                        <p>{item.price}€/DAN</p>
                                    </PriceDiv>
                                </FlexDiv>
                                <Btn>Rezerviraj</Btn>
                         </ItemWrap>
                    )
                })}
            </Box>
        </MainDiv>
      </motion.div>
    </div>
  )
}
const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 5rem;
    @media (max-width: 1605px) {
        height: 100%;
    }
`
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Btn = styled.button`
    max-width: 150px;
    height: 40px;
    font-size: 1.3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    color: white;
    background: #2E8BC0;
    cursor:pointer;
    &:hover{
        transition: 0.3s ease;
        opacity: 90%;
    }
`
const PriceDiv = styled.div`
    display: flex;
    p{
        font-size: 1.3rem;
        color: #2E8BC0;
        margin: 0 0.3rem;
    }
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ItemWrap = styled.div`
    border: 1px solid darkgray;
    width: 450px;
    height: 480px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    h1{
        font-size: 1.5rem;
        @media (max-width: 480px){
            font-size: 1rem
        }
    }
    h2{
        font-size: 1rem;
        color: darkgray;
        @media (max-width: 480px){
            font-size: 0.8rem
        }
    }
    @media (max-width: 480px){
        width: 350px;
        height:350px;
    }
    @media (max-width: 480px){
        width: 250px;
    }
`
const Flex = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`
const TopDiv = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 2.5rem;
        @media (max-width: 600px) {
            font-size: 1.5rem;
            text-align:center;
        }
    }
    p{
        font-size: 1.2rem;
        color: darkgray;
        margin: 1rem 0;
        letter-spacing: 1px;
    }
`
const Line = styled.div`
    border-top: 3px solid #2E8BC0;
    width: 75px;
    margin: 0 1rem;
    border-radius: 1rem;
`
export default Popular