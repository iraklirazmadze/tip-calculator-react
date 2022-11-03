import React, { useState } from "react";
import styled from "styled-components";


const TipSelect = ({setTipAmount}) => {
    const tipValues = [{value:0.05, checked:false},{value:0.1, checked:false},{value:0.15, checked:false},{value:0.25, checked:false},{value:0.5, checked:false}];
    const [activeTip,setActiveTip] = useState(tipValues)
    
    const setPercent =(event) =>{
        let arr = tipValues;
        arr[Number(event.target.id)].checked =true;
        setActiveTip(arr)
        setTipAmount(event.target.value);
        
    }

    const customPercent = (event) => {
        setActiveTip(tipValues)
        setTipAmount(event.target.value/100)
    }
   
    return(
        <div>
        <p>Select Tip %</p>
        <TipsSection>
            {activeTip.map((item,index) =>
                <Tip style={item.checked ? {backgroundColor: "#26C2AE",color:"#00474B"}:null}  key={index} id={index} value={item.value} onClick={setPercent}>{item.value*100}%</Tip>
            )}
            <TipInput type="number" min={0} max={100} placeholder="custom" onChange={customPercent}/>
        </TipsSection>
        </div>
    )

}

    export default TipSelect

const TipsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    row-gap: 17px;
    margin-top: 16px;

`



const TipInput = styled.input`
    font-family: Space Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: right;
    width: 148px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0;
    background-color: #F3F9FA;
    padding: 0 15px;
    color: #547878;
    &:hover{
        border: 2px solid #26C2AE;
        cursor: pointer;
    }
    

`
const Tip = styled.button`
    width: 148px;
    height: 48px;
    border-radius: 5px;
    background-color: #00474B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Space Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0px;
    color:white;
    border:0;
    &:hover{
        background-color: #9FE8DF;
        cursor: pointer;
    }

`