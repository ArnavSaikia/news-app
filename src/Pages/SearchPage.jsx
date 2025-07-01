import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from '../Components/Navbar.jsx';
import Funding from '../Components/Funding.jsx';
import Navbar2 from '../Components/Navbar2.jsx';
import Footer from '../Components/Footer.jsx';
import Article from '../Components/Article.jsx';


function SearchPage(){
    const {searchQuery} = useParams();
    const uriDecodedQuery = decodeURIComponent(searchQuery);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?q=${uriDecodedQuery}&show-fields=headline,trailText,thumbnail&api-key=a63faffd-11ac-4dd3-a568-efe280531529&page-size=21`;
        console.log(url);
        fetch(url)
        .then(received => received.json())
        .then(data => setSearchResults(data))
        .catch(err => console.log(err));

    },[searchQuery]);


    if(!searchResults || !searchResults.response) return(
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
                {searchResults.response.results.map((result, idx) => (
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

export default SearchPage;