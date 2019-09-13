// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {CardsContainer} from "./CharaGrid";
// import StretchCard from "./StretchCard";

// function StretchGrid() {
//     const [starship, setStarship] = useState([]);

//         useEffect(() => {
//             axios.get("https://swapi.co/api/starships/")
//                  .then(response => {
//                      const starships = response.data.results;
//                      console.log(starships);
//                      setStarship(starships);
//                  })
//                  .catch(error=> {
//                      alert("May the force be with you, unfortunately we can not display the awesome starships", error);
//                  })
//         }, []);

//         return (
//             <CardsContainer>
//                 {starship.map(ship => {
//                     return <StretchCard info={ship}/>;
//                 })}
//             </CardsContainer>
//         )

// }



// export default StretchGrid;
