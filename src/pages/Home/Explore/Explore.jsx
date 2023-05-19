import React from "react";
import { FcCollaboration, FcMindMap, FcRules, FcShipped } from "react-icons/fc";

const Explore = () => {
    return (
        <div className="explore mt-[130px] mx-5">
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <div className="hero-content text-center">
                        <div className="max-w-[768px]">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Explore the Lego World
                            </h1>
                            <p className="py-6">
                                Welcome to our website, dedicated to the
                                enchanting world of Lego sets. Immerse yourself
                                in a captivating realm where creativity knows no
                                bounds. With a vast collection of Lego sets
                                waiting to be explored, you can embark on
                                thrilling adventures, construct magnificent
                                structures, and bring your wildest imaginations
                                to life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 container">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <FcMindMap className="text-[40px]"></FcMindMap>
                            <h2 className="card-title">Lego Set Themes</h2>
                            <p>
                                Diverse collections of Lego sets that revolve
                                around specific concepts, worlds, or franchises.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co/rvgtx8F/375-2.jpg"
                                className="h-[200px] w-full object-cover"
                                alt="Lego Set Themes"
                            />
                        </figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <FcRules className="text-[40px]"></FcRules>
                            <h2 className="card-title">
                                Building Instructions
                            </h2>
                            <p>
                                Step-by-step guides provided by Lego to help
                                builders assemble their Lego sets.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co/jZYVsrW/201804-MMB-Instructions-Frog-02-2048x2048.png"
                                className="h-[200px] w-full object-cover"
                                alt="Building Instructions"
                            />
                        </figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <FcCollaboration className="text-[40px]"></FcCollaboration>
                            <h2 className="card-title">Community Events</h2>
                            <p>
                                Special gatherings or activities that bring
                                together individuals who share a common interest
                                in Lego.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co/3mZ0y6C/48752410461-32142e6db1-b.jpg"
                                className="h-[200px] w-full object-cover"
                                alt="Community Events"
                            />
                        </figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <FcShipped className="text-[40px]"></FcShipped>
                            <h2 className="card-title">Exclusive Offers</h2>
                            <p>
                                Special promotions or deals that provide unique
                                benefits to customers of Lego Sets.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co/kh0zW8d/LEGO-Store-Calendar-December-2020.jpg"
                                className="h-[200px] w-full object-cover"
                                alt="Exclusive Offers"
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="divider mt-[130px]"></div>
        </div>
    );
};

export default Explore;
