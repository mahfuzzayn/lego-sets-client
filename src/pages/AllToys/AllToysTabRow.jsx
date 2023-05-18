import React from "react";
import { Link } from "react-router-dom";

const AllToysTabRow = ({ toy  }) => {
    const {
        _id,
        photoURL,
        name,
        sellerName,
        email,
        subCategory,
        price,
        rating,
        quantity,
    } = toy;

    return (
        <tr>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>
                </div>
            </td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-accent">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysTabRow;
