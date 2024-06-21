import { useEffect, useState } from "react";
import AddCandyForm from "./Add-Candy/AddCandyForm";
import CandyList from "./Candy-List/CandyList";

function Main() {
    
    const [ candyState, setCandyState ] = useState([]);

    return (
        <>
        <AddCandyForm onSetCandyState={setCandyState}/>
        <CandyList candies={candyState}/>
        </>
    );
}

export default Main;