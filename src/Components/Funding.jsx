import '../Styles/Funding.css';
import guardianLogo from '../assets/guardianlogo.png';

function Funding(){
    return(
        <div className="funding-box">
            <div>
                <span>Support The Guardian</span>
                <span>Fund independent journalism with $5 per month</span>
                <button>Support Us</button>
            </div>
            <img src={guardianLogo}></img>
        </div>
    )
}

export default Funding;