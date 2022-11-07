import React,{useState} from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg'
import BillInput from './BillInput';
import TipSelect from './TipSelect';
import NumberOfPeople from './NumberOfPeople';
import ResultSection from './ResultSection';
function App() {
  const [billAmount,setBillAmount] = useState(0)
  const [TipAmount,setTipAmount] = useState(0)
  const [numPeople,setNumPeople] = useState(1)
  let tipResult = billAmount*TipAmount/numPeople;
  let totalResult = billAmount/numPeople +tipResult;
  tipResult = tipResult.toFixed(2);
  
  totalResult = totalResult.toFixed(2)

  return (
    <MainPage>
      <Logo src={logo} ></Logo>
      <Calculator>
        <Inputs>
          <BillInput setBillAmount={setBillAmount} />
          <TipSelect setTipAmount={setTipAmount} />
          <NumberOfPeople numPeople={numPeople} setNumPeople={setNumPeople} />
        </Inputs>
        <ResultSection tipResult={tipResult} totalResult={totalResult} />
      </Calculator>
    </MainPage>
    
  );
}

export default App;

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #C5E4E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  margin-top: 50px;
`

const Calculator = styled.div`
  width: 375px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 25px 25px 0 0;
  margin-top:40px;
  row-gap: 32px;
  @media (min-width:1440px){
    flex-direction: row;
    width: 920px;
    column-gap: 48px;
    margin-top: 87px;
    border-radius: 25px;
  }
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`
