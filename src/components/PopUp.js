import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'
import { PopUp1, PopUpInner } from './ComponentStyles/PopUp.styles';

function PopUp() {

    const [names, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const [productList, setProductList] = useState([])

    const sendProduct = () => {
        axios.post('http://localhost:3001/api/insert', {
            productName: names,
            productPrice: price,
            productDescription: description
        })
        setProductList([...productList,
        { productName: names, productPrice: price }])
    };

    return (
        <PopUp1>
            <PopUpInner>
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
                    }} >Post</button>
                </div>
            </PopUpInner>
        </PopUp1>
    )
}

export default PopUp