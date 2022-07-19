// import { useState, useEffect } from "react";
// import { faDice } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Results = ({ destinationResult, onLoad, images }) => {

//     console.log(images)
    
//     // images.map((image) => (
//     //     console.log(image.urls.small)
//     // ))

//     return (
//         <div>
//             <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={onLoad} />
//             <h1 className="destination-title">{destinationResult}</h1>
//             <div className='images-container'>
//             {images.map((image) => (
//                 <img
//                     src={image.urls.small}
//                     alt='paris'
//                     key={image.urls.small}
//                 />
//             ))}
//             </div>
//         </div>
//     );
// };

// export default Results;