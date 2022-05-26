import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard.componenet";
import Header from "../../components/header/Header.component";
import SideMenus from "../../components/SideMenus/SideMenus.components";
import sidebarContent from './sidebar.json';

import "./home.styles.scss";

const Home = () => {

    const movies = [
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
        {
            movieTitle:"The In Between",
            movieGenre:'Romance',
            imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg"
        },
    ]
    return (
        <div className="parent">
            {/* make header component */}
           <Header/>
            <div className="body">
                {/* sidebar should be a component   */}
                <div className="sidebar">
                        {/* make the list a component--- like a button  */}
                        {/**
                         * map the ListButtonComponent with json file i'll create the json file example just continue with that
                         *
                         * import SideMenus from "../-----"
                         *
                         * map sideMenus and you can access the label and path
                         */}
                        {/*
                          <li><ListButtonComponent label={"the name will be here"} path={"the link or route it points to"}/></li>
                        */}
                        <SideMenus sidebarContents={sidebarContent}/>
                </div>
                <div className="main">
                    {/* same here map */}
                    {movies.map((movie)=><MovieCard movieTitle={movie.movieTitle} movieGenre={movie.movieGenre} imgUrl={movie.imgUrl}/>)}
                </div>
            </div>
        </div>
    );
};

export default Home;
