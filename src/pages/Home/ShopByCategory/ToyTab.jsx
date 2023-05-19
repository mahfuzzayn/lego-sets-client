import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";

const ToyTab = ({ toy }) => {
    const { _id, photoURL, name, price, rating } = toy;

    return (
        <div className="toy flex justify-center">
            <div
                data-aos="flip-right"
                className="card card-compact w-96 bg-base-100 shadow-lg"
            >
                <figure>
                    <img
                        src={photoURL}
                        className="max-h-[180px] w-full object-cover"
                        alt="Toy Image"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-semibold">
                        Price: <span className="text-accent">${price}</span>
                    </p>
                    <div className="h-[20px] font-semibold flex gap-x-1">
                        Rating:{" "}
                        <Rating
                            className="h-[20px] max-w-[100px] -top-[1px]"
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`}>
                            <button className="btn btn-accent mt-4">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTab;
