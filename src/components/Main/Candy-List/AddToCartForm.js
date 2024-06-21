import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import "./AddToCartForm.css"

function AddToCartForm(props) {

    const [quantity, setQuantity] = useState(0);
    
    useEffect(() => { 
        if(quantity > 0) {
            props.addToCart(quantity);     
        } 
    } , [ quantity ]);

    return (
        <form class="form">
            <Button class="add-btn" onClick={() => setQuantity(1)}>Add 1</Button>
            <Button class="add-btn" onClick={() => setQuantity(2)}>Add 2</Button>
            <Button class="add-btn" onClick={() => setQuantity(3)}>Add 3</Button>
        </form>
    );
}

export default AddToCartForm;