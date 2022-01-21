import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {
     const [id,setId]=useState('');
    const search=()=>{ 
        
        axios.get( `https://rickandmortyapi.com/api/location/${id}`)
        .then(res=> setLocation( res.data));

    }
    return (
        <div className="search-box">
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <button onClick={search}>Buscar</button>
        </div>
    );
};

export default SearchBox;