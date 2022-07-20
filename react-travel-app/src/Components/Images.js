
const Images = ({ images }) => {
    return (
        <div className='carousel-container'>
            <div className='carousel'>
                {images.map((image) => (
                
                <div className = 'carousel-item'>
                    <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    key={image.id}
                        />
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Images;