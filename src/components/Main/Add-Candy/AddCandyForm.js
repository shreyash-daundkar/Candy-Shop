import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./AddCandyForm.css"

function AddCandyForm(props) {

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState(0);

    const handelName = e => setName(e.target.value)
    const handelDescription = e => setDescription(e.target.value)
    const handelPrice= e => setPrice(e.target.value)

    const add = e => {
        e.preventDefault();
        if(name.trim().length === 0 || description.trim().length === 0 || price <= 0) return;
        const candy = {
            id: Math.random(),
            name,
            description,
            price,
        }
        props.onSetCandyState((prevState) => [...prevState, candy]);
    }

    return (
        <Card class='candy-list margin-top-10'>
            <form class='add-candy-form' onSubmit={add}>
                <div class="unit">
                <label htmlFor="name" >Name: </label>
                <input type="text" id="name" onChange={handelName}></input>
                </div>
                <div class="unit">    
                <label htmlFor="description" >Description: </label>
                <input type="text" id="description" onChange={handelDescription}></input>
                </div>
                <div class="unit">
                <label htmlFor="price" >Price: </label>
                <input type="text" id="price" onChange={handelPrice}></input> 
                </div>
                <Button>+ Add</Button>
            </form>
        </Card>
    );
}

export default AddCandyForm;