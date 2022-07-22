import ReactLoading from 'react-loading'


const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

function Loading() {
    return (
        <div className='loading' style={style}>
        <ReactLoading
          type="spinningBubbles"
          color="black"
          height={100}
          width={50}
        />
      </div>
    );
}
  
export default Loading;