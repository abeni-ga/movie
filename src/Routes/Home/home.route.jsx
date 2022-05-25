import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard.componenet';
import './home.styles.scss';

const Home = ()=>{

    return(
    <div className="parent">
         <div className='header'>
        <ul>
          <li>
          <div>MEDIA APP</div>
          </li>
          <li>
        <input />
          </li>
          <li>
          <div>john mayer</div>
          </li>
        </ul>
      </div>
       <div className='body'>
        <div className='sidebar'>
          <ul>
            <li>New Release</li>
            <li>Trending</li>
            <li>Coming Soon</li>
            <li>Favorites</li>
            <li>Watch Later</li>
          </ul>
        </div>
       <div className='main'>
           <MovieCard />
           <MovieCard />
           <MovieCard />
           <MovieCard />    
        </div>
      </div> 
    </div>
    )
}

export default Home;