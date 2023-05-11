import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Wheels = () => {

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
            <TopDiv>
                <h1>WHEELS CAR RENTAL</h1>
                <Flex>
                    <Line />
                    <AiFillCar size={30} />
                    <Line />
                </Flex>
            </TopDiv>
            <BottomDiv>
                <Box>
                    <ImageDiv>
                        <img src='https://i.ibb.co/QkgfgMm/Wheels-Rent-Car-1.png' alt='logo' />
                    </ImageDiv>
                    <BtnDiv>
                        <h1>OPŠTI USLOVI NAJMA</h1>
                        <p>Opšte Uslove Iznajmljivanja Vozila Agencije Tantum Rent A Car Pročitajte U Posebnom Delu.</p>
                        <Btn>OPŠTI USLOVI <span><BsArrowRight /></span></Btn>
                    </BtnDiv>
                </Box>
            </BottomDiv>
        </motion.div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 3rem;
`
const BottomDiv = styled.div`
    width: 100%;
    height: 55vh;
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 2rem 16rem;
    @media (max-width: 1250px) {
        padding: 2rem 5rem;
    }
    @media (max-width: 850px) {
        padding: 2rem 2rem;
    }
    @media (max-width: 750px) {
        height: 100%;
    }
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    border:1px solid darkgray;
    display:flex;
    padding: 1rem 1rem;
    border-radius: 1rem;
    @media (max-width: 750px) {
        flex-direction:column;
    }
`
const Btn = styled.button`
    max-width: 450px;
    height: 50px;
    font-size: 1rem;
    padding: 0 1rem;
    display:flex;
    justify-content:center;
    align-items: center;
    color:white;
    background: #2E8BC0;
    border:none;
    border-radius: 1rem;
    cursor: pointer;
    span{
        margin-left:0.5rem;
        font-size: 1.2rem;
        display:flex;
        justify-content:center;
        align-items: center;
    }
    &:hover{
        transition: 0.3s ease;
        opacity: 90%;
    }
`
const ImageDiv = styled.div`
    width: 50%;
    height: 100%;
    img{
        height:99%;
    }
    @media (max-width: 750px) {
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
    }
`
const BtnDiv = styled.div`
    width: 50%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction:column;
    h1{
        margin-bottom: 1rem;
        font-size: 2rem;
        @media (max-width: 750px) {
            font-size: 1.5rem;
        }
    }
    p{
        margin-bottom: 1rem;
        font-size: 1rem;
        @media (max-width: 750px) {
            font-size: 0.8rem;
            text-align:center;
        }
    }
    @media (max-width: 750px) {
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
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
        @media (max-width: 750px) {
            font-size: 2rem;
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
    margin-top: 1rem;
    display: flex;
    align-items: center;
`
export default Wheels