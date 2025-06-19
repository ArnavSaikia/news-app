import placeholderImage from '../assets/news_placeholder.png';
import '../Styles/Article.css';

function Article(props){
    const imgSource = props.src || placeholderImage;
    const specificClassSelector = props.className || '';

    return(
        <div className={`article-box ${specificClassSelector}`}>
            <img src={imgSource}></img>
            <span className="article-cateogry">
                World / Middle East
            </span>
            <span className="article-description">
                Israel launches first ground offensive since end of Gaza ceasefire, partially recapturing key area
            </span>
        </div>
    )
}

export default Article;