import '../Styles/FooterLinkBox.css';

function FooterLinkBox(props){
    const linksList = props.links.map((name) => 
        <li>
            {name}
        </li>
    );

    function toggle(e){
        const content = e.target.nextElementSibling;
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }


    return(
        <div className="footer-link-box">
            <span onClick={toggle}>{props.name}</span>
            <ul>
                {linksList}
            </ul>
        </div>
    );
}

export default FooterLinkBox;