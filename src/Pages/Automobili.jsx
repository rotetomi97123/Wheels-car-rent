import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import { AllCars } from '../Components/data'
import {IoIosPricetag} from 'react-icons/io'
import { AiFillCar } from 'react-icons/ai'
import OpstiUsloviHero from '../Components/OpstiUsloviHero'

const Automobili = () => {
  return (
    <div>
        <Navbar />
        <Wrapper>
        <OpstiUsloviHero title="Nasi Automobili" text="Wheels car rental" text2="+381 65 123 1234" />
        
        <Box>
            {AllCars.map((item) => {
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
                  <GridContainer>
                        <GridItem>{item.fuel}</GridItem>
                        <GridItem>{item.seat} PUTNIKA</GridItem>
                        <GridItem>{item.door} VRATA</GridItem>
                        <GridItem>{item.change}</GridItem>
                        <GridItem>{item.klima}</GridItem>
                        <GridItem>{item.brzina} BRZINA</GridItem>
                    </GridContainer>
                  <Btn>Rezerviraj</Btn>
                </ItemWrap>
              )
            })}
          </Box>
        </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  width:100%;
  height: 100%;
  h1{
    text-align: center;
    font-size: 4rem;
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
    width: 550px;
    height: 680px;
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
    @media (max-width: 780px){
        width: 450px;
        height:650px;
    }
    @media (max-width: 480px){
        width: 250px;
    }
`

export default Automobili