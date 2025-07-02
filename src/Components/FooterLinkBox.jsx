import '../Styles/FooterLinkBox.css';
import downArrow from '../assets/icons8-sort-down-96.png';
import { Link } from 'react-router-dom';

function FooterLinkBox(props){
    const linksList = props.links.map((arr) => 
        <li>
            <Link to={`/category/${arr[1]}`}>
                 {arr[0]}
            </Link>
        </li>
    );

    function toggle(e){
        // Ensure we always get the span element
        const span = e.currentTarget;
        const content = span.nextElementSibling;
        const img = span.querySelector('img');
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            img.style.transform = "rotate(180deg)";
        } else {
            content.style.display = 'none';
            img.style.transform = "rotate(0deg)";
        }
    }


    return(
        <div className="footer-link-box">
            <span onClick={toggle}>{props.name}&nbsp;&nbsp;<img src={downArrow}></img></span>
            <ul>
                {linksList}
            </ul>
        </div>
    );
}

export default FooterLinkBox;