import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules'


function GamePlay() {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        } 

        
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice((prev) => randomNumber);
        if(selectedNumber ===randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    };
    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score = {score} />
                <NumberSelecter
                    error = {error}
                    setError = {setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice currentDice={currentDice}
                roleDice={roleDice}
            />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "show"}Rules</Button>
            </div>
           {showRules && <Rules/>} 
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.div`
    padding-top:70px;
    .top-section{
        display:flex;
        justify-content:space-around;
        align-items:end;
    }
    .btns{
        margin-top:40px;
        gap:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`