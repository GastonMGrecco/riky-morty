import React from 'react';
import ResidentInfo from './ResidentInfo';
const ResidentList = ({ubicacion}) => {
    return (
        
        <div className="list">
            {ubicacion.residents?.map((resident)=>(<ResidentInfo direccion= {resident} key={resident}/>))}
        </div>
    );
};

export default ResidentList;