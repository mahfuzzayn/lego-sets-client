import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysTabRow from "./AllToysTabRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle("All Toys");

    useEffect(() => {
        fetch("http://localhost:5000/all-toys")
            .then((res) => res.json())
            .then((data) => {
                setAllToys(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="progress-bar flex justify-center mt-[130px]">
                <progress className="progress progress-accent w-56"></progress>
            </div>
        );
    }

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
