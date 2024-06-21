import CartItem from "./CartItem";
import "./Cart.css"
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartContextProvider";


function Cart() {

    const { cartModalOpen, setCartModalOpen, cartState, placeOrder } = useContext(cartContext);

    const closeModal = () => setCartModalOpen(false);

    const order = () => placeOrder();

    return cartModalOpen ? (
        <Modal 
        class="cart"
        onBackdropClick={closeModal}
        >
            <ul>
                { cartState.cartItems.map(c => <CartItem cartItem={c} key={c.id} />) }
            </ul>
            <div class='total'>
                <span>Total Amount</span>
                <span>
                    {cartState.amount}
                </span>
            </div>
            <div class="action">
                <Button class="sec-btn" onClick={order}>Order</Button>
                <Button onClick={closeModal}>Close</Button>
            </div>
        </Modal> 
    ) : null;
}

export default Cart;