import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMobile,AiOutlineMail,AiOutlineClockCircle } from 'react-icons/ai'

const KontaktForm = () => {
  return (
    <Wrapper>
        <Box>
          <LeftBox>
              <h1>Ostavite pitanje!</h1>
              <Flex>
                <Input type='text' placeholder='Name' />
                <Input type='email' placeholder='Email' />
              </Flex>
                <Input2 type='text' placeholder='Subject' />
                <Textarea placeholder='Message' />
                <Btn>Poslati</Btn>
          </LeftBox>
          <RightBox>
            <div>
              <h1>Kontaktirajte nas</h1>
              <FlexBox>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <p>Gospodar Jovanova 25, Beograd</p>
              </FlexBox>
              <FlexBox>
                <span>
                  <AiOutlineMobile /> 
                </span>
                <p>+381 65 123 1234</p>
              </FlexBox>
              <FlexBox>
                <span>
                  <AiOutlineMail />
                </span>
                <p>rentacar@wheels.rs</p>
              </FlexBox>
              <FlexBox>
                <span>
                  <AiOutlineClockCircle /> 
                </span>
                <p>Pon-Ned 09:00 - 17:00</p>
              </FlexBox>
            </div>
          </RightBox>
        </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 2rem 2rem;
  @media (max-width: 1500px) {
    height: 100%;
  }
`
const Box = styled.div`
    width:100%;
    height: 100%;
    border-radius: 1rem;
    display:flex;
    @media (max-width: 1500px) {
      flex-direction:column;
    }
`
const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  padding-left: 7rem;
  border:1px solid darkgray;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2rem;
      margin-top:1rem;
    }
  }
  @media (max-width: 1500px) {
    width: 100%;
    height: 50%;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0rem;
    align-items:center;
    padding-left: 0rem;
  }
`
const RightBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: #2E8BC0;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-left: 7rem;
  h1{
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2rem;
      margin-top:1rem;
      text-align:center;
    }
  }
  @media (max-width: 1500px) {
    width: 100%;
    height: 50%;
    border-top-right-radius: 0rem;
    border-bottom-left-radius: 1rem;
    align-items:center;
    padding-left: 0rem;
    padding: 2rem 0;
  }
`
const FlexBox = styled.div`
  display: flex;
  justify-content:flex-start;
  align-items:center;
  color: white;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  span{
    display:flex;
    justify-content:center;
    align-items:center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #5AAFD7;
    font-size: 2rem;
    margin-right: 0.5rem;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem;
    font-size: 1rem;
  }
`
const Flex = styled.div`
  display:flex;
  @media (max-width: 700px) {
    flex-direction:column;
  }
`
const Input = styled.input`
  max-width: 295px;
  height: 50px;
  border: 1px solid darkgray;
  font-size: 1.5rem;
  margin-right: 10px;
  padding-left: 1rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  @media (max-width: 700px) {
    margin-right: 0rem;

  }
`
const Input2 = styled.input`
  max-width: 600px;
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
const Textarea = styled.textarea`
  max-width: 600px;
  height: 150px;
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
  max-width: 600px;
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
export default KontaktForm