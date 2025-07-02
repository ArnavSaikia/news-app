import guardianLogo from '../assets/guardianlogo_white.png';
import FooterLinkBox from './FooterLinkBox';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    const world = [
        ["Africa", "/search/" + encodeURIComponent("africa")],
        ["Americas", "/search/" + encodeURIComponent("south america")],
        ["Asia", "/search/" + encodeURIComponent("asia")],
        ["Australia", "/search/" + encodeURIComponent("australia-news")],
        ["China", "/search/" + encodeURIComponent("china")],
        ["Europe", "/search/" + encodeURIComponent("europe-news")],
        ["India", "/search/" + encodeURIComponent("india")],
        ["Middle East", "/search/" + encodeURIComponent("middleeast")],
        ["United Kingdom", "/search/" + encodeURIComponent("uk-news")],
        ["United States", "/search/" + encodeURIComponent("us-news")]
    ];
    const news = [
        ["Politics", "/category/" + encodeURIComponent("politics")],
        ["Business", "/category/" + encodeURIComponent("business")],
        ["Education", "/category/" + encodeURIComponent("education")],
        ["Sport", "/category/" + encodeURIComponent("sport")],
        ["Tech", "/category/" + encodeURIComponent("technology")],
        ["Science", "/category/" + encodeURIComponent("science")],
        ["Weather", "/category/" + encodeURIComponent("weather")],
        ["Culture", "/category/" + encodeURIComponent("culture")],
        ["Lifestyle", "/category/" + encodeURIComponent("lifeandstyle")],
        ["Opinion", "/category/" + encodeURIComponent("commentisfree")],
        ["Climate Crisis", "/category/" + encodeURIComponent("environment/climate-crisis")],
        ["Environment", "/category/" + encodeURIComponent("environment")],
        ["Global Development", "/category/" + encodeURIComponent("global-development")],
        ["More", "/category/" + encodeURIComponent("more")]
    ]
    const media = [
        ["Pictures", "https://www.theguardian.com/inpictures"],
        ["Videos", "https://www.theguardian.com/video"],
        ["Podcasts", "https://www.theguardian.com/podcasts"]
    ]

    const social = [
        ["Facebook", "https://www.facebook.com/theguardian"],
        ["Instagram", "https://www.instagram.com/guardian"],
        ["YouTube", "https://www.youtube.com/user/TheGuardian"],
        ["LinkedIn", "https://www.linkedin.com/company/the-guardian"],
        ["Newsletters", "https://www.theguardian.com/email-newsletters"]
    ];

    const company = [
        ["About Us", "https://www.theguardian.com/about"],
        ["Help", "https://www.theguardian.com/help"],
        ["Complaints & Corrections", "https://www.theguardian.com/info/complaints-and-corrections"],
        ["SecureDrop", "https://www.theguardian.com/securedrop"],
        ["Work For Us", "https://workforus.theguardian.com"],
        ["Contact Us", "https://www.theguardian.com/help/contact-us"],
        ["Tax Strategy", "https://www.theguardian.com/info/2017/nov/17/guardian-tax-strategy"],
        ["Advertise with Us", "https://advertising.theguardian.com"],
        ["Guardian Labs", "https://www.theguardian.com/guardianlabs"],
        ["Search Jobs", "https://jobs.theguardian.com"]
    ];

    const legal = [
        ["Privacy Policy", "https://www.theguardian.com/help/privacy-policy"],
        ["Cookie Policy", "https://www.theguardian.com/help/cookies"],
        ["Terms & Conditions", "https://www.theguardian.com/help/terms-of-service"]
    ];

    return(
        <footer>
            <div>
                <img src={guardianLogo}></img>
                <span>
                    Original reporting and incisive analysis,<br/>
                    direct from the Guardian every morning.
                </span>
                <button><a href="https://www.theguardian.com/email-newsletters" target="_blank" rel="noopener noreferrer">Sign up for our email</a></button>
                <button><a href="https://support.theguardian.com/contribute" target="_blank" rel="noopener noreferrer">Support Us</a></button>
            </div>
            
            <div className='links'>
                <FooterLinkBox name="World" links={world}/>
                <FooterLinkBox name="News" links={news} />
                <FooterLinkBox name="Media" links={media} />
                <FooterLinkBox name="Social" links={social} />
                <FooterLinkBox name="Company" links={company} />
                <FooterLinkBox name="Legal" links={legal} />
            </div>
            <div className='copyright-section'>
                ©2025 Guardian News & Media Limited or its affiliated companies. All rights reserved. (dcr)
            </div>
        </footer>
    )
}

export default Footer;