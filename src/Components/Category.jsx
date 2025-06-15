import Article from "./Article.jsx";

function Category(props){
    return (
        <div className="category-box">
            <span>{props.name} &gt; </span>
            <Article/>
            <Article/>
            <Article/>
        </div>
    )
}

export default Category;