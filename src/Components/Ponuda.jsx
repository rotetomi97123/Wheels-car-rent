import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiFillCar} from 'react-icons/ai'
import {IoIosPricetag} from 'react-icons/io'
import { Cars } from './data'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import queryString from 'query-string';

const Ponuda = () => {

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
    <PonudaWrap ref={ref}>
    <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <h1>NAJBOLJE PONUDE</h1>
        <Flex>
            <Line />
            <AiFillCar size={30} />
            <Line />
        </Flex>
        <Wrapper>
            <Box>
                <RightDiv>
                    <ImgWrap>
                        <img src={Cars[2].img} alt='car' />
                    </ImgWrap>
                    <FlexDiv>
                        <NameDiv>
                            <h1>{Cars[2].name}</h1>
                            <h2>{Cars[2].type}</h2>
                        </NameDiv>     
                        <PriceDiv>
                            <IoIosPricetag size={25} color='#2E8BC0' />  
                            <p>{Cars[2].price}€/DAN</p>
                        </PriceDiv>
                    </FlexDiv>
                    <GridContainer>
                        <GridItem>{Cars[2].fuel}</GridItem>
                        <GridItem>{Cars[2].seat} PUTNIKA</GridItem>
                        <GridItem>{Cars[2].door} VRATA</GridItem>
                        <GridItem>{Cars[2].change}</GridItem>
                        <GridItem>{Cars[2].klima}</GridItem>
                        <GridItem>{Cars[2].brzina} BRZINA</GridItem>
                    </GridContainer>
                    <BtnDiv>
                        <Link  to={{ 
                                pathname: '/AutoReservation',
                                search:   queryString.stringify({ myProp: JSON.stringify(Cars[2])}),
                            }}><Btn>Rezerviraj</Btn></Link>
                    </BtnDiv>
                </RightDiv>
                <LeftDiv />
            </Box>
            <Box2>
                <LeftDiv />
                <RightDiv>
                    <ImgWrap>
                        <img src={Cars[0].img} alt='car' />
                    </ImgWrap>
                    <FlexDiv>
                        <NameDiv>
                            <h1>{Cars[0].name}</h1>
                            <h2>{Cars[0].type}</h2>
                        </NameDiv>     
                        <PriceDiv>
                            <IoIosPricetag size={25} color='#2E8BC0' />  
                            <p>{Cars[0].price}€/DAN</p>
                        </PriceDiv>
                    </FlexDiv>
                    <GridContainer>
                        <GridItem>{Cars[0].fuel}</GridItem>
                        <GridItem>{Cars[0].seat} PUTNIKA</GridItem>
                        <GridItem>{Cars[0].door} VRATA</GridItem>
                        <GridItem>{Cars[0].change}</GridItem>
                        <GridItem>{Cars[0].klima}</GridItem>
                        <GridItem>{Cars[0].brzina} BRZINA</GridItem>
                    </GridContainer>
                    <BtnDiv>
                    <Link  to={{ 
                                pathname: '/AutoReservation',
                                search:   queryString.stringify({ myProp: JSON.stringify(Cars[0])}),
                            }}><Btn>Rezerviraj</Btn></Link>
                    </BtnDiv>
                </RightDiv>
            </Box2>
            <Box3>
                <ImgWrap>
                    <img src={Cars[1].img} alt='car' />
                </ImgWrap>
                <FlexDiv>
                    <NameDiv>
                        <h1>{Cars[1].name}</h1>
                        <h2>{Cars[1].type}</h2>
                     </NameDiv>     
                    <PriceDiv>
                        <IoIosPricetag size={25} color='#2E8BC0' />  
                         <p>{Cars[1].price}€/DAN</p>
                    </PriceDiv>
                </FlexDiv>
                <GridContainer>
                    <GridItem>{Cars[1].fuel}</GridItem>
                    <GridItem>{Cars[1].seat} PUTNIKA</GridItem>
                    <GridItem>{Cars[1].door} VRATA</GridItem>
                    <GridItem>{Cars[1].change}</GridItem>
                    <GridItem>{Cars[1].klima}</GridItem>
                    <GridItem>{Cars[1].brzina} BRZINA</GridItem>
                </GridContainer>
                <BtnDiv>
                <Link  to={{ 
                                pathname: '/AutoReservation',
                                search:   queryString.stringify({ myProp: JSON.stringify(Cars[1])}),
                            }}><Btn>Rezerviraj</Btn></Link>
                </BtnDiv>
            </Box3>
        </Wrapper>
        </motion.div>
    </PonudaWrap>
  )
}
const PonudaWrap = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 2.5rem;
        text-align: center;
        @media (max-width: 480px){
            font-size: 2rem;

        }
    }
    @media (max-width: 1550px) {
        height: 100%;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    position: relative;
    @media (max-width: 1550px) {
        flex-direction: column;
    }
`
const Box = styled.div`
    width: 650px;
    height: 80%;
    border: 1px solid black;    
    margin-right: 25rem;
    border-radius: 1rem;
    display:flex;
    @media (max-width: 1550px) {
        margin-right: 0rem;
        margin-bottom: 35rem;
        height: 650px;
        flex-direction: column;
        margin-top: 2rem;
    }
    @media (max-width: 730px){
        width: 400px;
    }
    @media (max-width: 480px){
        width: 85%;
    }
 `
 const Box2 = styled.div`
    width: 650px;
    height: 80%;
    border: 1px solid black;
    border-radius: 1rem;    
    display:flex;
    @media (max-width: 1550px) {
        height: 650px;
        flex-direction: column;

    }
    @media (max-width: 730px){
        width: 400px;
    }
    @media (max-width: 480px){
        width: 85%;
    }
 `
 const Box3 = styled.div`
    z-index: 30;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 90%;
    border: 1px solid black;
    border-radius: 1rem;
    background: #d2d2d2;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1550px) {
        height: 650px;
    }
    @media (max-width: 730px){
        width: 450px;
    }
    @media (max-width: 480px){
        width: 90%;
    }
 `
 const RightDiv = styled.div`
    width: 77%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1550px) {
        width: 100%;
        height: 90%
    }
 `
 const LeftDiv = styled.div`
    width: 23%;
    height: 100%;
    @media (max-width: 1550px) {
        width: 100%;
        height: 10%;
    }
 `
 const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
`;

const GridItem = styled.div`
    background-color: #ccc;
    font-size: 1rem;
    padding: 0 2rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid darkgray;
    border-radius: 0.5rem;
    &:hover{
        transition: 0.3s ease;
        color: white;
        background: #2E8BC0;
    }
    @media (max-width: 730px){
        padding: 0 1rem;
    }
    @media (max-width: 480px){
        padding: 0 0rem;
    }
`;
 const BtnDiv = styled.div`
    width: 100%;
    height: 10vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`
const Btn = styled.button`
    width: 350px;
    height: 50px;
    font-size: 1.5rem;
    background:  #2E8BC0;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    &:hover{
        transition: 0.3s ease;
        opacity: 80%;
    }
    @media (max-width: 480px){
        width: 250px;

    }
`
 const PriceDiv = styled.div`
    display: flex;
    p{
        font-size: 1.3rem;
        margin: 0 0.3rem;
        color:#2E8BC0;
    }
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 1.5rem;
        @media (max-width: 480px){
            font-size:1.2rem;
        }  
    }
    h2{
        font-size: 1rem;
        color: darkgray;
        @media (max-width: 480px){
            font-size:0.8rem;
        }
    }
`
 const ImgWrap = styled.div`
    width: 100%;
    height: 50%;
    display:flex;
    justify-content:center;
    align-items: center;
    img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        @media (max-width: 480px){
            width: 90%;
            height: 90%;
        }
    }
    
 `
 const Line = styled.div`
    border-top: 3px solid #2E8BC0;
    width: 75px;
    margin: 0 1rem;
    border-radius: 1rem;
`
const Flex = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content:center;
    align-items: center;
`
export default Ponuda