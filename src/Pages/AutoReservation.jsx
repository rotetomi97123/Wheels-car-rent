import React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Navbar from '../Components/Navbar'
import styled from 'styled-components';
import {IoIosPricetag} from 'react-icons/io'

const AutoReservation = () => {
  const location = useLocation();
  const { myProp} = queryString.parse(location.search);
  const parsedMyProp = JSON.parse(myProp);
  
  return (
    <div>
      <Navbar />
      <Wrapper>
        <LeftBox>
          <img src={parsedMyProp.img} alt={parsedMyProp.name}/>
              <FlexDiv>
                  <NameDiv>
                    <h1>{parsedMyProp.name}</h1>
                    <h2>{parsedMyProp.type}</h2>
                  </NameDiv>     
                  <PriceDiv>
                    <IoIosPricetag size={25} color='#2E8BC0' />  
                    <p>{parsedMyProp.price}€/DAN</p>
                  </PriceDiv>
              </FlexDiv>
            <GridContainer>
                    <GridItem>{parsedMyProp.fuel}</GridItem>
                    <GridItem>{parsedMyProp.seat} PUTNIKA</GridItem>
                    <GridItem>{parsedMyProp.door} VRATA</GridItem>
                    <GridItem>{parsedMyProp.change}</GridItem>
                    <GridItem>{parsedMyProp.klima}</GridItem>
                    <GridItem>{parsedMyProp.brzina} BRZINA</GridItem>
            </GridContainer>
        </LeftBox>
          <RightBox>
                <h1>Formular za rezervaciju</h1>
                <Flex>
                  <Input type='text' placeholder='FirstName' />
                  <Input type='text' placeholder='LastName' />
                </Flex>
                <Flex>
                  <Input type='number' placeholder='Age' />
                  <Input type='email' placeholder='Email' />
                </Flex>
                <Flex>
                  <Input type='number' placeholder='Phone Number' />
                  <Input type='text' placeholder='Address' />
                </Flex>
                <Input2 type='date'  />
                  <Btn>Rezerviraj</Btn>
            </RightBox>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width:100%:
  height: 90vh;
  margin-top: 15vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 1rem 5rem;
  @media (max-width: 1500px) {
    flex-direction:column;
    height: 100%;
    padding: 1rem 2rem;
  }
  @media (max-width: 900px){
    padding: 1rem 1rem;

  }
`
const LeftBox = styled.div`
  width: 50%;
  height: 90vh;
  border:1px solid darkgray;
  padding: 1rem;
  border-top-left-radius:1rem;
  border-bottom-left-radius:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  @media (max-width: 1500px) {
    width: 100%;
    height:50%;
    border-top-left-radius:1rem;
    border-top-right-radius:1rem;
    border-bottom-left-radius:0rem;
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
    font-size: 1.5rem;
    justify-content:center;
    align-items:center;
    p{
        margin: 0 0.3rem;
        color:#2E8BC0;
    }
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 2rem;
        @media (max-width: 480px){
            font-size:1.2rem;
        }  
    }
    h2{
        font-size: 1.2rem;
        color: darkgray;
        @media (max-width: 480px){
            font-size:0.8rem;
        }
    }
`
const RightBox = styled.div`
  width: 50%;
  height: 90vh;
  display:flex;
  flex-direction: column;
  justify-content:center;
  padding-left: 6rem;
  border:1px solid darkgray;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 900px) {
      font-size: 2rem;
      text-align:center;
      margin-top:1rem;
    }
  }
  @media (max-width: 1500px) {
    width: 100%;
    height: 50%;
    border-top-right-radius: 0rem;
    border-bottom-left-radius: 1rem;
    align-items:center;
    padding-left: 0rem;
  }
`
const Flex = styled.div`
  display:flex;
  @media (max-width: 900px) {
    flex-direction:column;
  }
`
const Input = styled.input`
  max-width: 295px;
  height: 50px;
  border: 1px solid darkgray;
  font-size: 1.5rem;
  margin-right: 2rem;
  padding-left: 1rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  @media (max-width: 700px) {
    margin-right: 0rem;

  }
`
const Input2 = styled.input`
  max-width: 300px;
  height: 50px;
  border: 1px solid darkgray;
  font-size: 1.5rem;
  padding-left: 1rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  @media (max-width: 1500px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 300px;
  }
`

const Btn = styled.button`
  max-width: 623px;
  height: 50px;
  background: #2E8BC0;
  border: none;
  color: white;
  border-radius: 1rem;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease;
    opacity: 80%;
  }
  @media (max-width: 1500px) {
    margin-bottom: 2rem;
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 300px;
  }
`
export default AutoReservation