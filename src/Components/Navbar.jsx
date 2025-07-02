import guardianLogo from '../assets/guardianlogo_white.png';
import SearchWidget from './SearchWidget.jsx';
import WeatherWidget from './WeatherWidget.jsx';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(){
    return(
        <nav>
            <WeatherWidget/>
            <Link to='/' style={{display: 'contents'}}><img src={guardianLogo} className='logo'></img></Link>
            <SearchWidget/>
        </nav>
    )
}

export default Navbar;