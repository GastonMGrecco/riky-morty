import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import ResidentList from './ResidentList';
import SearchBox from './SearchBox';

const LocationInfo = () => {

    const [location,setLocation]=useState('');

    
    useEffect(() =>{
        axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random()*126)+1}`)
        .then(res=> setLocation( res.data));
    },[]);
    
    
    return (
        <div className="location-info">
            <SearchBox setLocation={setLocation}/>
            <h2>{location.name}</h2>
            <div className="loc">
                <h3>Tipo:  {location?.type}</h3>
                <h3>Dimensión a la que pertenece:  {location?.dimension}</h3>
                <h3>La cantidad de residentes:  {location.residents?.length}</h3>
            </div>
            <ResidentList ubicacion={location}/>
        </div>
    );
};

export default LocationInfo;