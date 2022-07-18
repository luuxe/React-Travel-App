


const Results = ({destinationResult, onLoad}) => {


    return (
        <div>
            <h1>{destinationResult}</h1>
            <button onClick={onLoad}>Find another destination</button>
        </div>
    );
};

export default Results;