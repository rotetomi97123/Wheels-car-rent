import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt,FaTimes } from 'react-icons/fa'
import { AiOutlineMobile,AiOutlineClockCircle,AiOutlineInstagram,AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  const [mobileNav, setMobileNav] = useState(false)
  const [isMobile, setIsMobile] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleParagraphClick = (index) => {
    setActiveIndex(index);
  }
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 700){
        setIsMobile(false)
      }else{
        setIsMobile(true)
        setMobileNav(false)
      }
      
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
        <UpperWrap>
            <FlexDiv>
              <FaMapMarkerAlt size={20} color='#2E8BC0' />
              <p>Gospodar Jovanova 25, Beograd</p>
            </FlexDiv>
            <FlexDiv>
              <AiOutlineMobile size={20} color='#2E8BC0' />
              <p>+381 65 123 1234</p>
              <BsFillTelephoneFill size={20} color='#2E8BC0' />
            </FlexDiv>
            <FlexDiv>
              <AiOutlineClockCircle size={20} color='#2E8BC0' />
              <p>Pon-Ned 09:00 - 17:00</p>
            </FlexDiv>
            <FlexDiv>
              <SocialFb   />
              <SocialInsta />
              <SocialEmail  />
            </FlexDiv>
        </UpperWrap>
        <MainNav>            
            <h1>WHEELS</h1>
            {isMobile &&<NavDiv>
              <Link to='/'><StyledParagraph active={activeIndex === 0} onClick={() => handleParagraphClick(0)}>POČETNA</StyledParagraph></Link>
              <Link to='/OpstiUslovi'><StyledParagraph active={activeIndex === 1} onClick={() => handleParagraphClick(1)}>OPŠTI USLOVI</StyledParagraph></Link>
              <Link to='/'><StyledParagraph active={activeIndex === 2} onClick={() => handleParagraphClick(2)}>AUTOMOBILI</StyledParagraph></Link>
              <Link to='/'><StyledParagraph active={activeIndex === 3} onClick={() => handleParagraphClick(3)}>KONTAKT</StyledParagraph></Link>

            </NavDiv>}
              {isMobile === true ? '' : <RxHamburgerMenu onClick={()=>{setMobileNav(true)}} color='white' size={30} cursor='pointer'/> }
            </MainNav>
            {mobileNav &&<MobileNavDiv>
              <Exit onClick={()=>{setMobileNav(false)}} />
              <Link to='/'><StyledMobileParagraph active={activeIndex === 0} onClick={() => handleParagraphClick(0)}>POČETNA</StyledMobileParagraph></Link>
              <Link to='/OpstiUslovi'><StyledMobileParagraph active={activeIndex === 1} onClick={() => handleParagraphClick(1)}>OPŠTI USLOVI</StyledMobileParagraph></Link>
              <Link to='/'><StyledMobileParagraph active={activeIndex === 2} onClick={() => handleParagraphClick(2)}>AUTOMOBILI</StyledMobileParagraph></Link>
              <Link to='/'><StyledMobileParagraph active={activeIndex === 3} onClick={() => handleParagraphClick(3)}>KONTAKT</StyledMobileParagraph></Link>
            </MobileNavDiv>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 5vh;
  background-color: gray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`
const UpperWrap = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #3B3B3B;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding-left: 2rem;
  }
`
const FlexDiv = styled.div`
  display:flex;
  margin-right: 2rem;
  p{
    font-size: 1rem;
    margin: 0 0.2rem;
    color: white;
    @media (max-width: 600px) {
      font-size: 0.5rem;
    }
   
  }
`
const SocialFb = styled(AiOutlineFacebook)`
  font-size: 2rem;
  color: white;
  margin-right: 0.3rem;
  cursor:pointer;
  margin-left: 15rem;
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media (max-width: 1200px) {
    margin-left: 1rem;
  }
  @media (max-width: 700px) {
    display: none;
}
`
const SocialInsta = styled(AiOutlineInstagram)`
  font-size: 2rem;
  color: white;
  margin-right: 0.3rem;
  cursor:pointer;
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
  @media (max-width: 700px) {
    display: none;
  }
`
const SocialEmail = styled(AiOutlineMail)`
  font-size: 2rem;
  color: white;
  cursor:pointer;
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
      @media (max-width: 700px) {
        display: none;
      }

`
const MainNav = styled.div`
  position: absolute;
  top: 5vh;
  z-index: 10;
  width: 100%;
  height: 13vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background: rgba(0, 0, 0, 0.8);
  h1{
    color:white;
    font-size:4rem;
    cursor: pointer;
  @media (max-width: 600px) {
        font-size: 3rem;
  }
  }
  
`
const Exit = styled(FaTimes)`
  position: absolute;
  top:5.5rem;
  right: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
  
`
const MobileNavDiv = styled.div`
  z-index: 30;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.9);
  right: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  a{
    text-decoration:none;
    list-style-type:none;
  }
`
const StyledMobileParagraph = styled.p`
  color:  white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom:1rem;
  text-decoration:none;
  list-style-type:none;
  ${({ active }) => active && `
    color:#2E8BC0;
  `}
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
`
const StyledParagraph = styled.p`
  color:  white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration:none;
  list-style-type:none;
  margin-right: 1rem;
  ${({ active }) => active && `
    color:#2E8BC0;
  `}
  &:hover{
    color:#2E8BC0;
    transition: 0.1s ease;
  }
`;
const NavDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  a{
    text-decoration:none;
    list-style-type:none;
  }
`

export default Navbar