import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyToysTabRow from "./MyToysTabRow";
import Swal from "sweetalert2";
import {
    FaRandom,
    FaSortAmountDown,
    FaSortAmountDownAlt,
    FaSortDown,
} from "react-icons/fa";
import './MyToys.css'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSortingType, setCurrentSortingType] = useState("default");
    const [activeButton, setActiveButton] = useState(1);

    useTitle("My Toys");

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data);
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

    const handleToyDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-toys/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(
                                (toy) => toy._id !== _id
                            );
                            setMyToys(remaining);
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    const handleSort = (type) => {
        if (currentSortingType !== type) {
            setCurrentSortingType(type);
            fetch(
                `http://localhost:5000/my-toys?email=${user?.email}&sort=${type}`
            )
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    setMyToys(data);
                });
        }
    };

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="my-toys mt-[50px] md:mt-[130px] mx-5">
            <div className="hero">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl text-center font-bold">
                            My Toys: {myToys.length}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="sort-by-price dropdown mt-10">
                <label tabIndex={0} className="btn btn-accent">
                    Sort By Price
                    <FaSortDown className="relative -top-[2px] ml-1"></FaSortDown>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <button
                            className={activeButton === 1 ? "btn-active" : ""}
                            onClick={() => {
                                handleSort("default");
                                handleClick(1);
                            }}
                        >
                            <FaRandom></FaRandom>Default
                        </button>
                    </li>
                    <li>
                        <button
                            className={activeButton === 2 ? "btn-active" : ""}
                            onClick={() => {
                                handleSort("ascending");
                                handleClick(2);
                            }}
                        >
                            <FaSortAmountDownAlt></FaSortAmountDownAlt>
                            Ascending
                        </button>
                    </li>
                    <li>
                        <button
                            className={activeButton === 3 ? "btn-active" : ""}
                            onClick={() => {
                                handleSort("descending");
                                handleClick(3);
                            }}
                        >
                            <FaSortAmountDown></FaSortAmountDown> Descending
                        </button>
                    </li>
                </ul>
            </div>
            <div className="my-toys-table overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy) => (
                            <MyToysTabRow
                                key={toy._id}
                                toy={toy}
                                handleToyDelete={handleToyDelete}
                            ></MyToysTabRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
