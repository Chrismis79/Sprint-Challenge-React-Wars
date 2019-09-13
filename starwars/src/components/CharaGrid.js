import React, {useState, useEffect} from "react";
import axios from "axios";
import CharaCard from "./CharaCard";
import styled from "styled-components";

function CharaGrid() {
    const [chara, setChara] = useState([]);

        useEffect(() => {
            axios.get("https://swapi.co/api/people/")
                 .then(response => {
                     const characters = response.data.results;
                     console.log(characters);
                     setChara(characters);
                 })
                 .catch(error=> {
                     alert("May the force be with you, unfortunately we can not display the requested data", error);
                 })
        }, []);

        return (
            <div>
                {chara.map(hero => {
                    return <CharaCard info={hero}/>;
                })}
            </div>
        )

}



export default CharaGrid;
