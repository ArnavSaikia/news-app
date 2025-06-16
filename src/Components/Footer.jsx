import guardianLogo from '../assets/guardianlogo_white.png';

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
            <button>Sign up for email</button>
            <button>Support Us</button>
        </footer>
    )
}

export default Footer;