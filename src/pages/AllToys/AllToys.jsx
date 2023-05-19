import React, { useEffect, useRef, useState } from "react";
import AllToysTabRow from "./AllToysTabRow";
import useTitle from "../../hooks/useTitle";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [AllToysDuplicate, setAllToysDuplicate] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchRef = useRef();
    useTitle("All Toys");

    useEffect(() => {
        fetch("https://lego-sets-server.vercel.app/all-toys")
            .then((res) => res.json())
            .then((data) => {
                setAllToys(data);
                setAllToysDuplicate(data);
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

    const handleToySearch = (event) => {
        const searchText = event.target.value;
        const matched = AllToysDuplicate.filter((toy) =>
            toy.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setAllToys(matched);
    };

    const handleClearSearch = () => {
        searchRef.current.value = "";
        setAllToys(AllToysDuplicate);
    };

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
            <div className="search-container mt-10">
                <div className="form-control w-full max-w-xs">
                    <label
                        className="label justify-start gap-x-2"
                        htmlFor="search"
                    >
                        <FaSearch className="text-accent"></FaSearch>
                        <span className="label-text text-[16px]">Search</span>
                    </label>
                    <div className="flex relative">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Type Toy Name"
                            className="input input-bordered w-full max-w-xs pr-10"
                            onChange={handleToySearch}
                            ref={searchRef}
                        />
                        <button
                            onClick={handleClearSearch}
                            className="btn btn-xs btn-circle absolute top-3 right-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
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
