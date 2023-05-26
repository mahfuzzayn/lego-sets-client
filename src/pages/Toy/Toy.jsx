import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../hooks/useTitle";

const Toy = () => {
    const toy = useLoaderData();
    const {
        photoURL,
        name,
        sellerName,
        email,
        subCategory,
        price,
        rating,
        quantity,
        description,
    } = toy;
    // console.log(toy);
    useTitle(`Toy - ${name}`);

    // Automatically Get user to the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="toy mt-[50px] md:mt-[100px] mx-5">
            <div className="content">
                <div className="top-section lg:max-h-[500px] flex flex-col lg:flex-row justify-center">
                    <div className="box h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto w-full bg-accent flex justify-center items-center p-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {name}
                            </h1>
                            <h1 className="text-4xl md:text-5xl text-white font-bold mt-2">
                                ${price}
                            </h1>
                        </div>
                    </div>
                    <div className="picture w-full">
                        <img
                            src={photoURL}
                            className="w-full lg:max-h-[500px] max-w-[1024px]"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-3xl font-bold">
                        Toy <span className="text-accent">{name}</span>
                    </h1>
                    <div className="divider"></div>
                    <section className="mt-4 space-y-2 text-md">
                        <h3>
                            <span className="font-semibold">Seller Name:</span>{" "}
                            <span>{sellerName}</span>
                        </h3>
                        <h3>
                            <span className="font-semibold">Seller Email:</span>{" "}
                            <span>{email}</span>
                        </h3>
                        <h3>
                            <span className="font-semibold">Price:</span> $
                            <span>{price}</span>
                        </h3>
                        <h3>
                            <span className="font-semibold flex gap-x-2">
                                Rating:{" "}
                                <Rating
                                    className="max-w-[100px] -top-[1px]"
                                    value={rating}
                                    readOnly
                                />
                            </span>
                        </h3>
                        <h3>
                            <span className="font-semibold">
                                Available Quantity:
                            </span>{" "}
                            <span>{quantity}</span>
                        </h3>
                        <h3>
                            <span className="font-semibold">Description:</span>{" "}
                            <span>{description}</span>
                        </h3>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Toy;
