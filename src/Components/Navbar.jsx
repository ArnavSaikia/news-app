import guardianLogo from '../assets/guardianlogo.png';
import '../App.css';

function Navbar(){
    return(
        <nav>
            <img src={guardianLogo} className='logo'></img>
        </nav>
    )
}

export default Navbar;