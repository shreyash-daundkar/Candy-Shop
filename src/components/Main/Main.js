import { useEffect, useState } from "react";
import AddCandyForm from "./Add-Candy/AddCandyForm";
import CandyList from "./Candy-List/CandyList";

function Main() {
    
    const [ candyState, setCandyState ] = useState([]);

    useEffect(() => {
        const state = JSON.parse(localStorage.getItem('candy-state'));
        setCandyState(state === null ? [] : state);
    }, []);

    useEffect(() => {
        const state = JSON.stringify(candyState);
        localStorage.setItem('candy-state', state);
    }, [candyState]);

    return (
        <>
        <AddCandyForm onSetCandyState={setCandyState}/>
        <CandyList candies={candyState}/>
        </>
    );
}

export default Main;