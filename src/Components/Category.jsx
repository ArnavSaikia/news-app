import {useState , useEffect} from 'react';
import Article from "./Article.jsx";
import '../Styles/Category.css'
import { Link } from "react-router-dom";

function Category(props){
    const [articles,setArticles] = useState({});

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?section=${decodeURIComponent(props.sectionId)}&api-key=a63faffd-11ac-4dd3-a568-efe280531529&show-fields=headline,trailText,thumbnail`;
        fetch(url)
        .then(received => received.json())
        .then(data => setArticles(data));
    }, []);

    if(!articles || !articles.response) return (
        <div className="category-box">
            <span>{props.name}&nbsp;&nbsp;&gt; </span>
            <Article className='category'/>
            <Article className='category'/>
            <Article className='category'/>
            <hr/>
        </div>
    )

    return (
        <div className="category-box">
            <span>
                <Link to={`/category/${props.sectionId}`} style={{display: 'contents', color: '#202123'}}>
                    {props.name}&nbsp;&nbsp;&gt;
                </Link>
            </span>
            <Link to={`/article/${encodeURIComponent(articles.response.results[2].id)}`} style={{display: 'contents'}}>
                <Article
                    className='category'
                    src={articles.response.results[2].fields.thumbnail}
                    category={articles.response.results[2].sectionName}
                    headline={articles.response.results[2].fields.headline}
                />
            </Link>
            <Link to={`/article/${encodeURIComponent(articles.response.results[3].id)}`} style={{display: 'contents'}}>
                <Article
                    className='category'
                    src={articles.response.results[3].fields.thumbnail}
                    category={articles.response.results[3].sectionName}
                    headline={articles.response.results[3].fields.headline}
                />
            </Link>
            <Link to={`/article/${encodeURIComponent(articles.response.results[4].id)}`} style={{display: 'contents'}}>
                <Article
                    className='category'
                    src={articles.response.results[4].fields.thumbnail}
                    category={articles.response.results[4].sectionName}
                    headline={articles.response.results[4].fields.headline}
                />
            </Link>
            <hr/>
        </div>
    )
}

export default Category;