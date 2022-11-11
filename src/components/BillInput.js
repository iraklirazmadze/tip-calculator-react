import React from "react";
import styled from "styled-components";
import dollarIcon from "../images/icon-dollar.svg"

function BillInput ({setBillAmount}) {
    
    const setValue = () =>{
        let value = document.getElementById("bill").value;
        setBillAmount(value);

    }

    return(
        <BillInputDiv>
            <p>Bill</p> 
            <div style={{position:"relative", marginTop:"6px"}}>
            <DollarIcon src={dollarIcon}></DollarIcon>
            <Input type="Number" id="bill" min={0} onChange={setValue} placeholder={0}/>
            </div>
        </BillInputDiv>
    )
}

export default BillInput

const BillInputDiv = styled.div`
`

const Input = styled.input`
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
    color:#00474B;
    border: 2px;
    outline: none;
    border:2px solid white;
    &:hover{
        border: 2px solid #26C2AE;
        cursor: pointer;
    }
   

`

const DollarIcon = styled.img`
    position: absolute;
    width: 10px;
    height: 15px;
    left: 17px;
    top:17px;

`
