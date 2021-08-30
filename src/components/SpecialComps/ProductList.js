const ProductList = ({products, handleDelete}) => {

    return (
        <div className="ProductList">
            <h1>Product List</h1>
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    <h2>{ product.title }</h2>
                    <p>{ product.price }</p>
                    <button onClick={() => handleDelete(product.id)}> Delete product </button>
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