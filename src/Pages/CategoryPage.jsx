import { useState, useEffect } from 'react'
import '../App.css'
import Navbar from '../Components/Navbar.jsx';
import Funding from '../Components/Funding.jsx';
import Navbar2 from '../Components/Navbar2.jsx';
import Headlines from '../Components/Headlines.jsx';
import Category from '../Components/Category.jsx';
import Footer from '../Components/Footer.jsx';
import Article from '../Components/Article.jsx';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function CategoryPage(){
    const {id} = useParams();
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?section=${id}&api-key=a63faffd-11ac-4dd3-a568-efe280531529&show-fields=headline,trailText,thumbnail&page-size=21&order-by=newest`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(jsonResponse => setArticles(jsonResponse));
    },[id]);

    if(!articles || !articles.response) return(
        <>
            <Navbar/>
            <Funding/>
            <Navbar2/>
            <div className='main-body'>
                <h1>WORKING ON IT</h1>
            </div>
            <Footer/>
        </>
    )

    return(
        <>
            <Navbar/>
            <Funding/>
            <Navbar2/>
            <div className='main-body section-body'> 
                {articles.response.results.map((result, idx) => (
                    <Link
                        key={result.id || idx}
                        to={`/article/${encodeURIComponent(result.id)}`}
                        style={{ display: 'contents' }}
                    >
                        <Article
                            className='category'
                            src={result.fields?.thumbnail}
                            category={result.sectionName}
                            headline={result.fields?.headline}
                        />
                    </Link>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default CategoryPage;