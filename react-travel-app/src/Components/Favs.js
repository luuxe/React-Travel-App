import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Favs = ({ favsList, getFav, isEmpty }) => {
    
    //implement delete destination from favorites

    return (
        <div className='favs-container'>
            <h1>Favorite Destinations</h1>
            {isEmpty ? <div><p>favorites list is empty!</p> <p>Try clicking <span><FontAwesomeIcon icon={faHeart} /></span> to save a destination to your list.</p></div> : favsList.map((fav) => (
                        <ul key={fav}>
                            <motion.li onClick={getFav}
  whileHover={{
    scale: 0.95,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9}}
>{fav}</motion.li>
                        </ul>
                    ))
            }
            <p className='developed-by'>Developed by <a href='https://github.com/luuxe/React-Travel-App'>Luxe Hahn</a></p>
        </div>
    );
};

export default Favs;