import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/SearchWidget.css';

function SearchWidget(){
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if(e.key == 'Enter'){
            if (query.trim()) {
                navigate(`/search/${encodeURIComponent(query.trim())}`);
            }
        }
    };

    return(
        <div className="search-widget">
            <input onKeyDown={handleSearch} placeholder="Search" type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
        </div>
    )
}

export default SearchWidget;