import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    useTitle("")
    return (
        <div className="home">
            <Banner></Banner>
            <Gallery></Gallery>   
        </div>
    );
};

export default Home;
