import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Funding from "../Components/Funding.jsx";
import Navbar2 from "../Components/Navbar2.jsx";
import Footer from "../Components/Footer.jsx";
import placeHolderImage from '../assets/news_placeholder.png';
import '../Styles/ArticlePage.css';

function ArticlePage(){
    const {articleId} = useParams();
    const [articleObject , setArticleObject] = useState(1);

    if(!articleObject) return(
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

    return(
        <>
            <Navbar/>
            <Funding/>
            <Navbar2/>
            <div className="article-body">
                <span className="article-category">Business / Google</span>
                <span className="article-headline">Google agrees to pay $28 million to settle claims it favored white and Asian workers</span>
                <span className="article-trailtext">Class action lawsuit alleged company discriminated against minority background staff on pay and career oportunities</span>
                <hr/>
                <span className="article-publication-date">Wed 19 Mar 2025</span>
                <hr/>
                <img src={placeHolderImage}/>
                <p className="article-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi nisl eget sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Mauris euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi nisl eget sapien.
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default ArticlePage;