import React from "react";
import styled from "styled-components";


const ResultSection = ({tipResult,totalResult}) => {
  


    return(
        <ResultBox>
            <TipAmountDiv>
                <ByPerson>
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </ByPerson>
                <TipAmount>${tipResult}</TipAmount>
            </TipAmountDiv>
            <TotalDiv>
                <ByPerson>
                    <p>Total</p>
                    <span>/ person</span>
                </ByPerson>
                <TotalAmount>${totalResult}</TotalAmount>
            </TotalDiv>
            <ResetButton style={totalResult ==0 ? {backgroundColor: "#0D686D"}:null} onClick={() => window.location.reload()}>RESET</ResetButton>
        </ResultBox>
    )
}

export default ResultSection

const ResultBox =styled.div`
    width: 100%;
    background-color: #00474B;
    padding: 40px 24px 24px 24px;
    box-sizing: border-box;
    border-radius: 15px;
`

const TipAmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;

`

const ByPerson =styled.div`
    p{
        color:white;
    }
`

const TotalDiv = TipAmountDiv;

const TipAmount =styled.p`
    color: #26C2AE;
    font-family: Space Mono;
    font-size: 32px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: -0.6666666865348816px;
    text-align: right;

`

const TotalAmount = TipAmount;

const ResetButton = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background-color: #26C2AE;
    border:0;
    font-family: Space Mono;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    color: #00474B;
    margin-top: 14px;
    &:hover{
        cursor: pointer;
        background-color: #9FE8DF;
    }

`

