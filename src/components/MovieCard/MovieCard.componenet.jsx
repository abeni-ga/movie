import "./MovieCard.styles.scss";

const MovieCard = () => {
    return (
        //Change class name
        //accept Name and Genre as a prop
        <div className="card"> 
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
            />
            <h3>The In Between</h3>
            <p>Genre</p>
        </div>
    );
};

export default MovieCard;
