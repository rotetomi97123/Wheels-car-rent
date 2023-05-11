import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Onama = () => {

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
        <TopDiv>
                <h1>O NAMA</h1>
            <Flex>
                <Line />
                <AiFillCar size={30} />
                <Line />
            </Flex>
            <p>Wheels car rental</p>
        </TopDiv>
        <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <BottomDiv>
            <LeftDiv>
                <p>Dobrodošli na Wheels car rent - vaš pouzdan partner za iznajmljivanje automobila u Srbiji. 
                    Naša kompanija pruža visokokvalitetne usluge iznajmljivanja vozila po pristupačnim cenama.
                    Sa našom modernom flotom vozila i stručnim osobljem, možete biti sigurni da ćete dobiti vozilo
                    koje vam odgovara i da ćete biti u dobrim rukama.
                    Rezervišite vaše vozilo danas i krenite u svoju u Srbiji!</p>
                <Btn>+381 65 123 1234</Btn>
            </LeftDiv>
            <RightDiv>
                <img src='https://images.unsplash.com/photo-1519557489688-c30c74763166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='car' />
            </RightDiv>
        </BottomDiv>
        </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    @media (max-width: 1200px) {
        height: 100%;
        margin-bottom: 2rem;
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
const Flex = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`
const BottomDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`
const RightDiv = styled.div`
    img{
        margin-left: 2rem;
        max-width: 800px;
        @media (max-width: 1200px){
            margin-top: 2rem;
            margin-left: 0rem;
        }
        @media (max-width: 800px){
            max-width: 500px;
        }
        @media (max-width: 500px){
            width:300px;
        }
    }
`
const LeftDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 1.3rem;
        line-height: 3rem;
        max-width: 600px;
        
    }
    @media (max-width: 630px){
        padding: 1rem 1rem;
        p{
            font-size: 1rem;
        }
    }
`
const Btn = styled.button`
    max-width: 250px;
    height: 50px;
    font-size: 1.5rem;
    background-color: #2E8BC0;
    border-radius: 1rem;
    color: white;
    border: none;
    margin-top: 1rem;
`
export default Onama