import "./MovieCard.styles.scss";

const MovieCard = (props) => {
    return (
        //Change class name
        //accept Name and Genre as a prop
        <div className="card"> 
            <img
                alt={`${props.movieTitle}`}
                src={props.imgUrl}
            />
            <h3>{props.movieTitle}</h3>
            <p>{props.movieGenre}</p>
        </div>
    );
};

export default MovieCard;
