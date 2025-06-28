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

function CategoryPage(){
    const {id} = useParams();
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?section=${id}&api-key=a63faffd-11ac-4dd3-a568-efe280531529&show-fields=headline,trailText,thumbnail&page-size=12`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(jsonResponse => setArticles(jsonResponse));
    },[]);

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
            <div className='main-body'> 
                {articles.response.results.map((result, idx) => (
                    <Article
                        key={result.id || idx}
                        className='category'
                        src={result.fields?.thumbnail}
                        category={result.sectionName}
                        headline={result.fields?.headline}
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default CategoryPage;