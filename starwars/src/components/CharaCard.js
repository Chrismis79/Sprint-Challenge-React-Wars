import React from "react";

import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 2px solid black;
    width: 30%;
    background: tan;
    opacity: 0.8; 
`;

const CharaCard = props => {
    return (
        <CardDiv>
            <h2>{props.info.name}</h2>
            <p>{props.info.name} is {props.info.ht}cm and weighs {props.info.mass}. {props.info.name} has {props.info.hair} hair color and skin tone is {props.info.skin}</p>

        </CardDiv>
    )
}




export default CharaCard;