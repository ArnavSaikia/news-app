import { useState, useEffect } from 'react'
import Article from "./Article.jsx";
import '../Styles/Headlines.css';
import { Link } from "react-router-dom";

function Headlines(){
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const headlinesUrl = `https://content.guardianapis.com/search?order-by=newest&show-fields=headline,trailText,thumbnail&api-key=a63faffd-11ac-4dd3-a568-efe280531529`;
        
        fetch(headlinesUrl)
        .then((received) => received.json())
        .then(data => setHeadlines(data));
        
    }, []);

    if(!headlines || !headlines.response) return (
        <div className="headlines-box">
            <span>Headlines</span>
            <Article className={null}/>
            <Article className={null}/>
            <hr/>
        </div>
    )

    return(
        <>
            <div className="headlines-box">
                <span>Headlines</span>
                    <Article
                        className={null}
                        src={headlines.response.results[0].fields.thumbnail}
                        category={headlines.response.results[0].sectionName}
                        headline={headlines.response.results[0].fields.headline}
                    />
                    <Article
                        className={null}
                        src={headlines.response.results[1].fields.thumbnail}
                        category={headlines.response.results[1].sectionName}
                        headline={headlines.response.results[1].fields.headline}
                    />
                <hr/>
            </div>
        </>
    )
}

export default Headlines;