import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const bannerRef = useRef();

    return (
        <div className="banner mt-5" ref={bannerRef}>
            <div
                data-aos="fade-up"
                className="hero"
                style={{
                    backgroundImage: `url("https://i.ibb.co/tLnSPjM/10-3018754.jpg")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content min-h-[400px] py-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Lego Sets</h1>
                        <p className="mb-5">
                            Discover endless creativity with our LEGO sets!
                            Unleash your imagination and build extraordinary
                            worlds brick by brick. Whether you're a seasoned
                            LEGO enthusiast or a beginner, our wide range of
                            sets offers something for everyone. From iconic
                            landmarks to fantastical adventures, our LEGO sets
                            bring your favorite stories and characters to life.
                        </p>
                        <Link to="/all-toys">
                            <button className="btn btn-accent">Discover</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
