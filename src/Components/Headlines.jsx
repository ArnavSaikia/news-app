import Article from "./Article.jsx";
import '../Styles/Headlines.css';

function Headlines(){
    return(
        <div className="headlines-box">
            <span>Headlines</span>
            <Article/>
            <Article/>
        </div>
    )
}

export default Headlines;