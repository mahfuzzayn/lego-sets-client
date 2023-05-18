import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import TableRow from "./TableRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useTitle("My Toys");

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, []);

    return (
        <div className="my-toys mt-[130px] mx-5">
            <div className="hero">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">
                            My Toys
                        </h1>
                    </div>
                </div>
            </div>
            <div className="my-toys-table overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy) => (
                            <TableRow key={toy._id} toy={toy}></TableRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
