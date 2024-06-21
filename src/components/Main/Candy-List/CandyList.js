import Card from "../../UI/Card";
import Candy from "./Candy";
import "./CandyList.css";

function CandyList(props) {
    return (
        <>
        <Card class='candy-list'>
        { props.candies.length === 0 && <h2>No Candies Available</h2>}
            <ul>
                {props.candies.map(candy => {
                    return (
                        <Candy candy={candy} key={candy.id}/>
                    )
                })}
            </ul>
        </Card>
        </>
    );
}

export default CandyList;