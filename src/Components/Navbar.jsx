import guardianLogo from '../assets/guardianlogo_white.png';
import SearchWidget from './SearchWidget';
import '../App.css';

function Navbar(){
    return(
        <nav>
            <img src={guardianLogo} className='logo'></img>
            <SearchWidget/>
        </nav>
    )
}

export default Navbar;