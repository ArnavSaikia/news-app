import placeholderImage from '../assets/news_placeholder.png';
import '../Styles/Article.css';

function Article(props){
    const imgSource = props.src || placeholderImage;
    const headline = props.headline || "Israel launches first ground offensive since end of Gaza ceasefire, partially recapturing key area";
    const category = props.category || "World / Middle East";
    const specificClassSelector = props.className || '';

    return(
        <div className={`article-box ${specificClassSelector}`}>
            <img src={imgSource}></img>
            <span className="article-cateogry">
                {category}
            </span>
            <span className="article-description">
                {headline}
            </span>
        </div>
    )
}

export default Article;