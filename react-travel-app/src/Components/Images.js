
const Images = ({ images }) => {
    return (
        <div className='carousel-container'>
            <div className='carousel'>
                {images.map((image) => (
                    //key must be in parent element
                    <div className='carousel-item' key={image.id}>
                    <img
                    src={image.urls.small}
                    alt={image.alt_description}
                        />
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Images;