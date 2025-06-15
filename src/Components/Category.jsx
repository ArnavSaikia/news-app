import Article from "./Article.jsx";
import '../Styles/Category.css'

function Category(props){
    return (
        <div className="category-box">
            <span>{props.name}&nbsp;&nbsp;&gt; </span>
            <Article/>
            <Article/>
            <Article/>
            <hr/>
        </div>
    )
}

export default Category;