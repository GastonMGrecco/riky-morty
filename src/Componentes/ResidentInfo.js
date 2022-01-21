import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';

const ResidentInfo = ({direccion}) => {
const [personaje,setPersonaje]=useState({});
console.log(direccion);

useEffect(() => {
   axios.get(direccion).then(res=>setPersonaje(res.data))}, [direccion])
    return (
        <div className="residentinfo">
            <div>
                <h5>Nombre: {personaje?.name}</h5>
                <img src={personaje?.image}/>
            </div>
            <div>
                <h5>Status:   {personaje?.status}</h5>
                <h5>Origen:   {personaje.origin?.name}</h5>
                <h5>Episodios:   {personaje.epidode?.length}</h5>
            </div>
        </div>
    );
};

export default ResidentInfo;