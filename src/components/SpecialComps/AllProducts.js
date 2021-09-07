import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../index.css'

function AllProducts() {

    const [productList, setProductList] = useState([])
    const [updatedPrice, setUpdatedPrice] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/api/get')
            .then((response) => {
                setProductList(response.data)
            })
    }, [])

    const deleteProduct = (product) => {
        axios.delete(`http://localhost:3001/api/delete/${product}`)
    }

    const updatePrice = (product) => {
        axios.put("http://localhost:3001/api/update", {
            productName: product,
            productPrice: updatedPrice,
        })
        setUpdatedPrice("")
    }

    return (
        <div className="product-container">
            {productList.map((val) => {
                return (
                    <div className="product-card">
                        <h1>{val.productName}</h1>
                        <h1>{val.productPrice}</h1>
                        <h1 className="product-description">{val.productDescription}</h1>
                        <div className="button-holder">
                            <button onClick={() => { deleteProduct(val.productName) }}>Delete</button>
                            <input type="text" id="inputbox" onChange={(event) => { setUpdatedPrice(event.target.value)}} />
                            <button onClick={() => { updatePrice(val.productName)}}>Update</button>
                        </div>
                    </div>
                )
            })}
            {console.log(updatedPrice)}
        </div>
    )
}

export default AllProducts
