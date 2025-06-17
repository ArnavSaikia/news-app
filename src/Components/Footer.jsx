import guardianLogo from '../assets/guardianlogo_white.png';
import FooterLinkBox from './FooterLinkBox';
import '../Styles/Footer.css';

function Footer(){
    const world = ["Africa", "Americas", "Asia", "Australia", "China", "Europe", "India", "Middle East", "United Kingdom", "United States"];
    const news = [
        "Politics",
        "Business",
        "Education",
        "Sport",
        "Tech",
        "Science",
        "Weather",
        "Culture",
        "Lifestyle",
        "Opinion",
        "Climate Crisis",
        "Environment",
        "Global Development",
        "More"
    ]
    const media = [
        "Pictures",
        "Videos",
        "Podcasts"
    ]

    const social = ["Facebook", "Instagram", "YouTube", "LinkedIn", "Newsletters"]

    const company = [
        "About Us",
        "Help",
        "Complaints & Corrections",
        "SecureDrop",
        "Work For Us",
        "Contact Us",
        "Tax Strategy",
        "Advertise with Us",
        "Guardian Labs",
        "Search Jobs"
    ];

    const legal = [
        "Privacy Policy",
        "Cookie Policy",
        "Terms & Conditions"
    ];

    return(
        <footer>
            <img src={guardianLogo}></img>
            <span>
                Original reporting and incisive analysis,<br/>
                direct from the Guardian every morning.
            </span>
            <button>Sign up for our email</button>
            <button>Support Us</button>
            <div className='links'>
                <FooterLinkBox name="World" links={world}/>
                <FooterLinkBox name="News" links={news} />
                <FooterLinkBox name="Media" links={media} />
                <FooterLinkBox name="Social" links={social} />
                <FooterLinkBox name="Company" links={company} />
                <FooterLinkBox name="Legal" links={legal} />
            </div>
        </footer>
    )
}

export default Footer;