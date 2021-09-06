import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'

function AllProducts() {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/get')
        .then((response) => {
            setProductList(response.data)
        })
    })

    return (
        <div className="product-container">
            {productList.map((val) => {
                return (
                    <h1>
                        productName: {val.productName}, productPrice: {val.productPrice}
                    </h1>
                )
            })}
        </div>
    )
}

export default AllProducts
