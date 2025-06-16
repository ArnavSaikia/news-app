function footerLinkBox(props){
    const linksList = props.links.map((name) => 
        <li>
            {name}
        </li>
    );


    return(
        <div className="footer-link-box">
            <span>{props.name}</span>
            <ul>
                {linksList}
            </ul>
        </div>
    );
}

export default footerLinkBox;