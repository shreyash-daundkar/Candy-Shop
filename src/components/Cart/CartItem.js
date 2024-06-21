import { useContext } from "react";
import Button from "../UI/Button";
import "./CartItem.css"
import { cartContext } from "../../contexts/CartContextProvider";

function CartItem(props) {

    const { id, name, price, quantity } = props.cartItem;

    const { decrementQuantity, incrementQuantity } = useContext(cartContext);

    const reduceQuantity = e => decrementQuantity(id);
    const addQuantity = e => incrementQuantity(id);

    return (
        <li class='cart-item'>
            <div>
                <h3>
                    {name}
                </h3>
                <div class="price-quantity">
                    <span class='cart-price'>
                        {price}
                    </span>
                    <span class='cart-quantity'>
                        x{quantity}
                    </span>
                </div>
            </div>
            <div class='change-quantity'>
                <Button class="sec-btn small-btn" onClick={addQuantity}>+</Button>
                <Button class="sec-btn small-btn" onClick={reduceQuantity} >-</Button>
            </div>
        </li>
    );
}

export default CartItem;