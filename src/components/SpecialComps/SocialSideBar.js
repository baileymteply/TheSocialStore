import React, { useState, useEffect } from "react";
import "./SpecialComps.css"
import PostList from "./PostList";

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
    <div className="social-container-ele">
        <div className="social-textbox">
        {posts && <PostList posts={ posts } handleDelete={ handleDelete } />}
        {/* <ProductList products={products.filter((product) => product.price === "$14.99")} /> */}
        {/* FILTERING OUT WHICH PRODUCTS SHOULD APPEAR ON A SPECIFIC USERS PROFILE */}
        </div>
    </div>
    );
}

export default SocialSideBar;