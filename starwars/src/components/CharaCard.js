import React from "react";
import CharaGrid from "./CharaGrid";
import styled from "styled-components";

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const CharaCard = props => {
    return (
        <CardDiv>
            <h2>{props.info.name}</h2>
            {/* <p>{props.name} is {props.ht}cm and weighs {props.mass}. {props.name} has {props.hair} hair color and skin tone is {props.skin}</p> */}

        </CardDiv>
    )
}




export default CharaCard;