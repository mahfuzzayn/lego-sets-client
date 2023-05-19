import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import JoinUs from "../JoinUs/JoinUs";

const Home = () => {
    useTitle("");
    return (
        <div className="home">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;
