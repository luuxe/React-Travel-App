
const Favs = ({ favsList, getFav }) => {

    //implement delete destination from favorites
    

    return (
        <div className='favs-container'>
            <h1>Favorite Destinations</h1>
            {favsList.map((fav) => (
                <ul key={fav}>
                    <li onClick={getFav}>{fav}</li>
                </ul>
            ))}

        </div>
    );
};

export default Favs;