import React, { useState } from 'react'
import styled from 'styled-components'
import {IoIosPricetag} from 'react-icons/io'
import {AllCars} from '../Components/data'
import queryString from 'query-string';
import { Link } from 'react-router-dom'

const Automobili = () => {
    const ProductItems = [...AllCars];
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
    const [selectedOption5, setSelectedOption5] = useState('');

    const filteredItems = ProductItems.filter(item => {
    if (selectedOption1 !== '' && item.brand !== selectedOption1) {
        return false;
    }
    if (selectedOption2 !== '' && item.type !== selectedOption2) {
        return false;
    }
    if (selectedOption3 !== '' && item.fuel !== selectedOption3) {
        return false;
    }
    if (selectedOption4 !== '' && item.seat !== selectedOption4) {
        return false;
    }
    if (selectedOption5 !== '' && item.door !== selectedOption5) {
        return false;
    }
    return true;
    });

    const handleOptionChange1 = e => {
    setSelectedOption1(e.target.value);
    };

    const handleOptionChange2 = e => {
    setSelectedOption2(e.target.value);
    };

    const handleOptionChange3 = e => {
    setSelectedOption3(e.target.value);
    };

    const handleOptionChange4 = e => {
    setSelectedOption4(e.target.value);
    };

    const handleOptionChange5 = e => {
    setSelectedOption5(e.target.value);
    };

  return (
    <>
        <SelectBox>
            <SelecWrap>
                <Label htmlFor="filter-select1">Marka:</Label>
                    <Select id="filter-select1" value={selectedOption1} onChange={handleOptionChange1}>
                        <option value="">All</option>
                        <option value="fiat">Fiat</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="renault">Renault</option>
                        <option value="peugeot">Peugeot</option>
                        <option value="ford">Ford</option>
                        <option value="toyota">Toyota</option>
                        <option value="bmw">BMW</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="nissan">Nissan</option>
                        <option value="skoda">Skoda</option>
                        <option value="honda">Honda</option>
                        <option value="chevrolet">Chevrolet</option>
                    </Select>
            </SelecWrap>
            <SelecWrap>
                <Label htmlFor="filter-select2">Karoserija:</Label>
                    <Select id="filter-select2" value={selectedOption2} onChange={handleOptionChange2}>
                        <option value="">All</option>
                        <option value="HATCHBACK">HATCHBACK</option>
                        <option value="KARAVAN">KARAVAN</option>
                        <option value="SEDAN">SEDAN</option>
                        <option value="SUV">SUV</option>
                    </Select>
            </SelecWrap>
            <SelecWrap>
                <Label htmlFor="filter-select3">Gorivo:</Label>
                    <Select id="filter-select3" value={selectedOption3} onChange={handleOptionChange3}>
                        <option value="">All</option>
                        <option value="BENZIN">BENZIN</option>
                        <option value="DIZEL">DIZEL</option>
                     
                    </Select>
            </SelecWrap>
            <SelecWrap>
                <Label htmlFor="filter-select4">Sedište:</Label>
                    <Select id="filter-select4" value={selectedOption4} onChange={handleOptionChange4}>
                        <option value="">All</option>
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                     
                    </Select>
            </SelecWrap>
            <SelecWrap>
                <Label htmlFor="filter-select5">Vrata:</Label>
                    <Select id="filter-select5" value={selectedOption5} onChange={handleOptionChange5}>
                        <option value="">All</option>
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>

                    </Select>
            </SelecWrap>
        </SelectBox>
        <Box>
        {filteredItems.map((item) => {
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
                    <Link  to={{ 
                                pathname: '/AutoReservation',
                                search:   queryString.stringify({ myProp: JSON.stringify(item)}),
                            }}><Btn>Rezerviraj</Btn></Link>
            </ItemWrap>
            )
            })}
        </Box>
    </>
  )
}
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
        width: 300px;
        height:500px;

    }
`
const SelectBox = styled.div`
    width: 100%;
    display:flex;
    padding: 1rem 6rem;
    @media (max-width: 900px){
        flex-direction:column;
        padding: 1rem 2rem;

    }
`
const Select = styled.select`
  font-size: 1.3rem;
  margin-left: 1rem;
  background-color:#2E8BC0;
  color: white;
  border-radius: 0.5rem;
  `
const Label = styled.label`
  font-size: 1.5rem;
`
const SelecWrap = styled.div`
    margin-right: 2rem;
`
export default Automobili