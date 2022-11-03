import React from "react";
import styled from "styled-components";
import personIcon from "../images/icon-person.svg"


const NumberOfPeople = ({setNumPeople}) => {
    const setValue =() =>{
        let value = document.getElementById("peopleAmount").value
        setNumPeople(value);
    }

    return(
        <div>
        <p>Number of People</p>
        <div style={{position:"relative", marginTop:"6px"}}>
            <PersonIcon src={personIcon}></PersonIcon>
            <InputNumberOfPeple type="Number" id="peopleAmount" min={1} onChange={setValue} placeholder={0}/>
            </div>
        </div>
    )
}

export default NumberOfPeople

const InputNumberOfPeple = styled.input`
    width: 100%;
    border-radius: 5px;
    border:0;
    background-color: #F3F9FA;
    font-family: Space Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: right;
    height: 48px;
    padding: 6px 17px;
    box-sizing: border-box;
    color: #00474B;
    &:hover{
        border: 2px solid #26C2AE;
        cursor: pointer;
    }
`

const PersonIcon = styled.img`
    position: absolute;
    width: 13px;
    height: 15px;
    left: 17px;
    top:17px;
`