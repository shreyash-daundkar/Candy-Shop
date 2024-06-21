import { useContext } from "react";
import AddToCartForm from "./AddToCartForm";
import "./Candy.css"
import { cartContext } from "../../../contexts/CartContextProvider";

function Candy(props) {

    const cartCtx = useContext(cartContext);

    const addToCart = quantity => quantity > 0 ? cartCtx.addToCart(props.candy, quantity) : null;

    return (
        <li class="candy">
            <div>
                <h3>{props.candy.name}</h3>
                <div class="description">{props.candy.description}</div>
                <div class="price">{props.candy.price}</div>
            </div>
            <AddToCartForm addToCart={addToCart}/>
        </li>
    );
}

export default Candy;