import {useState , useEffect} from 'react';
import Article from "./Article.jsx";
import '../Styles/Category.css'

function Category(props){
    const [articles,setArticles] = useState({});

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?section=${props.sectionId}&api-key=a63faffd-11ac-4dd3-a568-efe280531529&show-fields=headline,trailText,thumbnail`;
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
            <span>{props.name}&nbsp;&nbsp;&gt; </span>
            <Article className='category' src={articles.response.results[2].fields.thumbnail} category={articles.response.results[2].sectionName} headline={articles.response.results[2].fields.headline}/>
            <Article className='category' src={articles.response.results[3].fields.thumbnail} category={articles.response.results[3].sectionName} headline={articles.response.results[3].fields.headline}/>
            <Article className='category' src={articles.response.results[4].fields.thumbnail} category={articles.response.results[4].sectionName} headline={articles.response.results[4].fields.headline}/>
            <hr/>
        </div>
    )

    
}

export default Category;