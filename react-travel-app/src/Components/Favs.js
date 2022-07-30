
const Favs = ({ favsList }) => {

    //implement delete destination from favorites
    function deleteFav(e) {
        //console.log(e.target.innerText) - returns city name
    }

    return (
        <div className='favs-container'>
            in Favs List
            {favsList.map((fav) => (
                <ul key={fav}>
                    <li onClick={deleteFav}>{fav}</li>
                </ul>
            ))}

        </div>
    );
};

export default Favs;