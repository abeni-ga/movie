import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard.componenet";
import "./home.styles.scss";

const Home = () => {
    return (
        <div className="parent">
            {/* make header component */}
            <div className="header">
                <ul>
                    <li>
                        <div>MEDIA APP</div>
                    </li>
                    {/* then make input component and it should have its own style */}
                    <li>
                        <input />
                    </li>
                    {/* accept the name as a prop after you create the header */}
                    <li>
                        <div>john mayer</div>
                    </li>
                </ul>
            </div>
            <div className="body">
                {/* sidebar should be a component   */}
                <div className="sidebar">
                    <ul>
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
                        <li>New Release</li>
                        <li>Trending</li>
                        <li>Coming Soon</li>
                        <li>Favorites</li>
                        <li>Watch Later</li>
                    </ul>
                </div>
                <div className="main">
                    {/* same here map */}
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
