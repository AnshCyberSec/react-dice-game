import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice({roleDice,currentDice}) {




    return (
        <DiceContainer>
            <div className='dice'
                onClick={roleDice}>
                <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice-1" />
            </div>
            <p>Click on Dice To Roll</p>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top:48px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .dice{
        cursor: pointer;
    }
    
`