import '../../index.css'

const CateogryList = ({categories, handleDelete}) => {

    return (
        <div className="CategoryList grid grid-cols-2">
            {categories.map((category) => (
                <div className="choicesStyle" key={category.id}>
                    <h2>{ category.title }</h2>
                    <p>{ category.price }</p>
                    <button onClick={() => handleDelete(category.id)}> Delete </button>
                </div>
            ))}
        </div> 
    );
}
 
export default CateogryList;