import React from "react";

const TableRow = ({ toy }) => {
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

    return (
        <tr>
            <th>
                <button className="btn btn-error btn-circle">
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
                            <img
                                src={photoURL}
                                alt="Avatar Tailwind CSS Component"
                            />
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
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <button className="btn btn-accent">Update</button>
            </td>
        </tr>
    );
};

export default TableRow;
