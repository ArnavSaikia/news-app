import '../Styles/Funding.css';
import guardianLogo from '../assets/guardianlogo.png';

function Funding(){
    return(
        <div className="funding-box">
            <div>
                <span>Support The Guardian</span>
                <span>Fund independent journalism with $5 per month</span>
                <button><a href="https://support.theguardian.com/contribute" target="_blank" rel="noopener noreferrer">Support Us</a></button>
            </div>
            <img src={guardianLogo}></img>
        </div>
    )
}

export default Funding;