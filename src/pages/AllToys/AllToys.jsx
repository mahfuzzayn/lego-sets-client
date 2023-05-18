import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysTabRow from "./AllToysTabRow";

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [allToys, setAllToys] = useState(loadedToys);

    return (
        <div className="all-toys mt-[50px] md:mt-[100px] mx-5">
            <div className="hero">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl text-center font-bold">
                            All Toys: {allToys.length}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="my-toys-table overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((toy) => (
                            <AllToysTabRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysTabRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
