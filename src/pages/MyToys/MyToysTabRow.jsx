import React from "react";
import { Link } from "react-router-dom";
import { useValidateImageURL } from "use-validate-image-url";

const MyToysTabRow = ({ toy, handleToyDelete, handleUpdateDelete }) => {
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
    const photoUrlStatus = useValidateImageURL(photoURL);

    return (
        <tr>
            <th>
                <button
                    onClick={() => handleToyDelete(_id)}
                    className="btn btn-error btn-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {photoUrlStatus === "valid" && (
                                <img src={photoURL} alt="Photo" />
                            )}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <Link to={`/update-toys/${_id}`}>
                    <button className="btn btn-accent">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default MyToysTabRow;
