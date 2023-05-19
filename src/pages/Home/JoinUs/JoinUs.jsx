import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div className="carousel-section mt-[130px] mx-5">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10">
                <div className="carousel h- w-full max-w-[768px] rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://p325k7wa.twic.pics/high/lego/lego-brawls/00-page-setup/LB_NEW_header_mobile.jpg?twic=v1/resize=760/step=10/quality=80"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide4"
                                className="btn btn-circle btn-accent"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide2"
                                className="btn btn-circle btn-accent"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide1"
                                className="btn btn-circle btn-accent"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide3"
                                className="btn btn-circle btn-accent"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://images.nintendolife.com/55b7f23432d7a/best-switch-lego-games.large.jpg"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide2"
                                className="btn btn-circle btn-accent"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide4"
                                className="btn btn-circle btn-accent"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://cdn.thewirecutter.com/wp-content/media/2020/12/lego-2048px-9074-2x1-2.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide3"
                                className="btn btn-circle btn-accent"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide1"
                                className="btn btn-circle btn-accent"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="hero-content text-center md:text-left">
                        <div className="max-w-md">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Join Our Community
                            </h1>
                            <p className="py-6">
                                Are you passionate about connecting with
                                like-minded individuals and sharing your
                                experiences? Join our vibrant community of
                                individuals who are eager to share, collaborate,
                                and grow together.
                            </p>
                            <Link to="/register">
                                <button
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    className="btn btn-accent"
                                >
                                    Join Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
