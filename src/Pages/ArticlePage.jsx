import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Funding from "../Components/Funding.jsx";
import Navbar2 from "../Components/Navbar2.jsx";
import Footer from "../Components/Footer.jsx";
import placeHolderImage from '../assets/news_placeholder.png';
import '../Styles/ArticlePage.css';
import Article from "../Components/Article.jsx";
import { Link } from "react-router-dom";

function ArticlePage(){
    const {articleId} = useParams();
    const uriDecodedId = decodeURIComponent(articleId);
    console.log("URI decoded:", uriDecodedId);
    const [articleObject , setArticleObject] = useState(null);
    const [topStories, setTopStories] = useState(null);
    const [relatedStories, setRelatedStories] = useState(null);

    function transformInteractiveFigures(html) {
        return html.replace(
            /<figure[^>]*class="[^"]*element-interactive[^"]*"[^>]*data-canonical-url="([^"]+)"[^>]*>(.*?)<\/figure>/g,
            (_, url) => {
            return `<iframe src="${url}" width="fit-content" height="fit-content" frameborder="0" style="border: none; overflow-y: auto;" scrolling="yes" allowfullscreen></iframe>`;
            }
        );
    }

    function rewriteGuardianLinks(html) {
        return html.replace(
            /<a\s+[^>]*href="https:\/\/www\.theguardian\.com\/([^"]+)"[^>]*>(.*?)<\/a>/gi,
            (_match, path, text) => {
            const localPath = `/news-app/article/${encodeURIComponent(path)}`;
            return `<a href="${localPath}">${text}</a>`;
            }
        );
    }



    useEffect(() => {
        const url = `https://content.guardianapis.com/${uriDecodedId}?show-fields=headline,body,thumbnail,main,byline,trailText&api-key=a63faffd-11ac-4dd3-a568-efe280531529`;

        fetch(url)
        .then(received => received.json())
        .then(data => {
            setArticleObject(data.response.content);
            return data.response.content.sectionId;
        })
        .then((section) => {
            return fetch(`https://content.guardianapis.com/search?section=${section}&order-by=newest&show-fields=headline,trailText,thumbnail&page-size=12&api-key=a63faffd-11ac-4dd3-a568-efe280531529`);
        })
        .then(results => results.json())
        .then(data => setRelatedStories(data))
        .then(console.log(relatedStories))
        .catch(err => console.log(err));
    },[uriDecodedId]);

    useEffect(() => {
        const url = `https://content.guardianapis.com/search?order-by=newest&show-fields=headline,trailText,thumbnail&page-size=12&api-key=a63faffd-11ac-4dd3-a568-efe280531529`;
        
        fetch(url)
        .then(received => received.json())
        .then(data => setTopStories(data))
        .catch(err => console.log(err));
    },[uriDecodedId]);

    if(!articleObject || !topStories || !relatedStories) return(
        <>
            <Navbar/>
            <Funding/>
            <Navbar2/>
            <div className="main-body">
                <h1>LOADING ARTICLE</h1>
            </div>
            <Footer/>
        </>
    )

    else{
        const headline = articleObject.fields.headline;
        const category= articleObject.sectionName;
        const trailText = articleObject.fields.trailText;

        let timeOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Kolkata',
            timeZoneName: 'short'
        };
        const publicationDate = new Date(articleObject.webPublicationDate).toLocaleString('en-GB',timeOptions);
        const image = articleObject.fields.thumbnail;
        const bodyText = rewriteGuardianLinks(transformInteractiveFigures(articleObject.fields.body));

        return(
            <>
                <Navbar/>
                <Funding/>
                <Navbar2/>
                <div className="article-body">
                    <span className="article-category">{category}</span>
                    <span className="article-headline">{headline}</span>
                    <span className="article-trailtext">{trailText}</span>
                    <hr/>
                    <span className="article-publication-date">{publicationDate}</span>
                    <hr/>
                    <img src={image||placeHolderImage}/>
                    <p className="article-text"
                        dangerouslySetInnerHTML={{ __html: bodyText }}
                    >
                    </p>
                    <hr/>
                </div>
                <div className="related-stories-box">
                    <span className="heading">Related Stories&nbsp;&nbsp;&gt; </span>
                    {relatedStories.response && relatedStories.response.results.slice(0,4).map((story, idx) => (
                        <Link
                            key={story.id || idx}
                            to={`/article/${encodeURIComponent(story.id)}`}
                            style={{ display: 'contents' }}
                        >
                            <Article
                                className="related-stories-article"
                                src={story.fields?.thumbnail}
                                category={story.sectionName}
                                headline={story.fields?.headline}
                            />
                        </Link>
                    ))}
                </div>
                <div className="top-stories-box">
                    <hr/>
                    <span className="heading">Top Stories&nbsp;&nbsp;&gt; </span>
                    {topStories.response && topStories.response.results.slice(0,2).map((story, idx) => (
                        <Link
                            key={story.id || idx}
                            to={`/article/${encodeURIComponent(story.id)}`}
                            style={{ display: 'contents' }}
                        >
                            <Article
                                className="top-stories-article"
                                src={story.fields?.thumbnail}
                                category={story.sectionName}
                                headline={story.fields?.headline}
                            />
                        </Link>
                    ))}
                </div>
                <Footer/>
            </>
        )
    }
}

export default ArticlePage;