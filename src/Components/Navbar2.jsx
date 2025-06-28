import '../Styles/Navbar2.css';
import { Link } from 'react-router-dom';


function Navbar2(){
    return(
        <div className="navbar2">
            <Link to={'/'}><div>Home</div></Link>
            <Link to={'/category/news'}><div>News</div></Link>
            <Link to={'/category/commentisfree'}><div>Opinion</div></Link>
            <Link to={'/category/sport'}><div>Sport</div></Link>
            <Link to={'/category/culture'}><div>Culture</div></Link>
            <Link to={'/category/lifeandstyle'}><div>Lifestyle</div></Link>
            <div className="vertical-line"></div>
            <Link to={'/category/world'}><div>World</div></Link>
            <Link to={`/category/${encodeURIComponent("environment/climate-crisis")}`}><div>Climate Crisis</div></Link>
            <Link to={'/category/environment'}><div>Environment</div></Link>
            <Link to={'/category/science'}><div>Science</div></Link>
            <Link to={'/category/global-development'}><div>Global Development</div></Link>
            <Link to={'/category/technology'}><div>Tech</div></Link>
            <Link to={'/category/business'}><div>Business</div></Link>
            <div className="vertical-line"></div>
            <div>More</div>
        </div>
    )
}

export default Navbar2;