import React, { useState, useEffect } from "react";
import "../../styles/SideBar.css";
import PostList from "./PostList";
import { Container, TextBox } from './SpecialCompStyles/SocialSideBar.styles';

function SocialSideBar() {
    const [posts, setPosts] = useState(null)

    const handleDelete = (id) => {
        // eslint-disable-next-line no-undef
        const newPosts = posts.filter(post = post.id !== id);
        setPosts(newPosts);
    }

    useEffect(() => {
        fetch('http://localhost:8000/ExamplePosts')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    return (
    <Container>
        <TextBox>
        {posts && <PostList posts={ posts } handleDelete={ handleDelete } />}
        {/* <ProductList products={products.filter((product) => product.price === "$14.99")} /> */}
        {/* FILTERING OUT WHICH PRODUCTS SHOULD APPEAR ON A SPECIFIC USERS PROFILE */}
        </TextBox>
    </Container>
    );
}

export default SocialSideBar;

/* ([
    { title: 'Really Cool Umbrella', image: '', description: 'A fully functional umbrella', price: '$14.99', id: 1},
    { title: 'Pretty Nice Roku Remote', image: '', description: 'Doesnt get lost', price: '$8.99', id: 2}
]); */

{/* <div className="h-11/12 w-1/4 mx-2 my-4 p-4 border-4 border-white text-white shadow-2xl SocialSideBar"></div> */}