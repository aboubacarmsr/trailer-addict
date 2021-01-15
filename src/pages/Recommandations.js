import React from 'react'

const Recommandations = ({ isOpen, isFrench }) => {
    return ( 
        <div className={isOpen ? "recommandations recommandations-open" : "recommandations"}>
            <p> Coming soon ... </p>
        </div>
     );
}
 
export default Recommandations;