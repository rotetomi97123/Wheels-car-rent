import React from 'react'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'

const OpstiUsloviHero = ({title,text, text2}) => {
  return (
    <Wrapper>
          <ImgWrap>
            <img src='https://www.belgradewaterfront.com/static/uploads/development_render_02-min-1024x768.jpg' alt='beograd' />
          </ImgWrap>
          <ItemContainer>
            <FlexDiv>
                <TextWrap>  
                  <h1>{title}</h1>
                    <Flex>
                        <Line />
                        <AiFillCar size={30} color='#2E8BC0'/>
                        <Line />
                    </Flex>
                    <p>{text}</p>
                    <h3>{text2}</h3>
                </TextWrap>
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
const Line = styled.div`
    border-top: 3px solid white;
    width: 75px;
    margin: 0 1rem;
    border-radius: 1rem;
`
const Flex = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
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

const TextWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
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
    font-size: 1.3rem;
    font-weight: 100;
    margin-top:0.5rem;
    @media (max-width: 700px){
      font-size: 1rem;
    }
  }
  h3{
    color:#2E8BC0;
    font-size: 1.3rem;
    margin-top:0.5rem;
  }
  @media (max-width: 400px) {
    padding: 1rem 1rem;
  }
`
export default OpstiUsloviHero