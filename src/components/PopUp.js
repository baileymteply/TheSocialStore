import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'
import { PopUp1, PopUpInner, CloseButton } from './ComponentStyles/PopUp.styles';

function PopUp(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/api/get')
            .then((response) => {
                console.log(response)
            })
    }, [])

    const sendProduct = () => {
        axios.post('http://localhost:3001/api/insert', {
            productName: name,
            productPrice: price,
            productDescription: description
        })
            .then((response) => {
                alert(response);
            });
    };

    return (
        <PopUp1>
            <PopUpInner>
                <CloseButton onClick={() => props.setTrigger(false)}>
                    Close
                </CloseButton>
                <h3>Add Product</h3>
                <div className="add-product">
                    <div className="input-box">
                        <label>Product Name: </label>
                        <input className="input-text" type="text" name="name" onChange={(event) => {
                            setName(event.target.value);

                        }} />
                    </div>
                    <div className="input-box">
                        <label>Product Price: </label>
                        <input className="input-text" type="text" name="price" onChange={(event) => {
                            setPrice(event.target.value);
                        }} />
                    </div>
                    <div className="input-box">
                        <label>Product Description: </label>
                        <input className="input-text" type="text" name="description" onChange={(event) => {
                            setDescription(event.target.value);
                        }} />
                    </div>
                    <button onClick={() => {
                        sendProduct();
                        /* console.log(name, price, description) */
                        }} >Post</button>
                </div>
                {props.children}
            </PopUpInner>
        </PopUp1>
    )
}

export default PopUp