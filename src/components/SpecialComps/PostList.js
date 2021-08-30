import '../../index.css'

const ProductList = ({posts }) => {

    return (
        <div className="PostList">
            <h1 className="post-label">Recent Posts</h1>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <h2 className="post-author">{ post.Author }</h2>
                    <p className="post-post">{ post.Post }</p>
                    <p className="post-time">{ post.Time }</p>
 {/*                    <button onClick={() => handleDelete(post.id)}> Delete product </button> */}
                </div>
            ))}
        </div> 
    );
}
 
export default ProductList;



    /* const [products, setProducts] = useState([
        { title: 'Really Cool Umbrella', image: '', description: 'A fully functional umbrella', price: '$14.99', id: 1},
        { title: 'Pretty Nice Roku Remote', image: '', description: 'Doesnt get lost', price: '$8.99', id: 2}
    ]) */