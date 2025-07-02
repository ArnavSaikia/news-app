import guardianLogo from '../assets/guardianlogo_white.png';
import SearchWidget from './SearchWidget.jsx';
import WeatherWidget from './WeatherWidget.jsx';
import '../App.css';

function Navbar(){
    return(
        <nav>
            <WeatherWidget/>
            <img src={guardianLogo} className='logo'></img>
            <SearchWidget/>
        </nav>
    )
}

export default Navbar;