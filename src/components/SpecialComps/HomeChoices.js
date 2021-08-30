import { Container } from './SpecialCompStyles/HomeChoices.styles'
import '../../index.css'
import React, { useState, useEffect } from "react";
import CategoryList from './CategoryList';

const HomeChoices = () => {
    /* const choices = ['Clothes', 'Furniture', 'Electronics', 'Other']
    const items = []
    for (const choice of choices) {
        items.push(<div className="choicesStyle">{choice}</div>)
    } */
    const [categories, setCategories] = useState(null)

    const handleDelete = (id) => {
        // eslint-disable-next-line no-undef
        const newCategories = categories.filter(category = category.id !== id);
        setCategories(newCategories);
    }

    useEffect(() => {
        fetch('http://localhost:8000/categories')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setCategories(data)
        })
    }, [])
    return ( 
        <Container>
            {categories && <CategoryList categories={ categories } handleDelete={ handleDelete } />}
{/*             {items} */}
        </Container>
     );
}
 
export default HomeChoices;