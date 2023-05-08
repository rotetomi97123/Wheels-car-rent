import React from 'react'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'
import { Cars } from './data'
import { IoIosPricetag } from 'react-icons/io'
 
const Popular = () => {
  return (
    <div>
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
                         </ItemWrap>
                    )
                })}
            </Box>
        </MainDiv>
    </div>
  )
}
const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 5rem;
`
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    height: 100%;
    display:flex;
    flex-direction:column;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 1rem;
        color: darkgray;
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