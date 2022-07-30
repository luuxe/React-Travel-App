import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Favs = ({ favsList, getFav, isEmpty }) => {
    
    //implement delete destination from favorites

    return (
        <div className='favs-container'>
            <h1>Favorite Destinations</h1>
            {isEmpty ? <div><p>favorites list is empty!</p> <p>Try clicking <span><FontAwesomeIcon icon={faHeart} /></span> to save a destination</p></div> : favsList.map((fav) => (
                        <ul key={fav}>
                            <li onClick={getFav}>{fav}</li>
                        </ul>
                    ))
                }
        </div>
    );
};

export default Favs;