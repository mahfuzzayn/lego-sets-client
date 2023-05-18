import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    useTitle("Update Toy");

    const handleAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            photoURL,
            name,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };
        // console.log(updatedToy);

        fetch(`http://localhost:5000/all-toys/${toy._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`${name} toy updated successfully.`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    };

    return (
        <div className="add-a-toy mt-[50px] md:mt-[100px] mx-5">
            <div className="hero">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl text-center font-bold">
                            Update Toy{" "}
                            <span className="text-accent">{toy?.name}</span>
                        </h1>
                    </div>
                    <div className="card w-full">
                        <div className="card-body">
                            <form onSubmit={handleAddAToy}>
                                <div className="form-control">
                                    <label
                                        className="label"
                                        htmlFor="photo-url"
                                    >
                                        <span className="label-text">
                                            Picture URL of the Toy
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="photo-url"
                                        placeholder="URL"
                                        name="photoURL"
                                        defaultValue={toy?.photoURL}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="name">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="toy name"
                                        name="name"
                                        defaultValue={toy?.name}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-x-4">
                                    <div className="form-control w-full">
                                        <label
                                            className="label"
                                            htmlFor="seller-name"
                                        >
                                            <span className="label-text">
                                                Seller Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="seller-name"
                                            placeholder="name"
                                            name="sellerName"
                                            className="input input-bordered"
                                            defaultValue={user?.displayName}
                                            disabled
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label
                                            className="label"
                                            htmlFor="email"
                                        >
                                            <span className="label-text">
                                                Seller Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="email"
                                            name="email"
                                            className="input input-bordered"
                                            defaultValue={user?.email}
                                            disabled
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label
                                        className="label"
                                        htmlFor="sub-category"
                                    >
                                        <span className="label-text">
                                            Sub Category
                                        </span>
                                    </label>
                                    <select
                                        className="select select-bordered font-medium"
                                        name="subCategory"
                                        id="sub-category"
                                        defaultValue={
                                            toy ? toy?.subCategory : "Lego City"
                                        }
                                    >
                                        <option>Lego City</option>
                                        <option>Lego Star Wars</option>
                                        <option>Lego Cars</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-x-4">
                                    <div className="form-control w-full">
                                        <label
                                            className="label"
                                            htmlFor="price"
                                        >
                                            <span className="label-text">
                                                Price
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            min={1}
                                            placeholder="price"
                                            name="price"
                                            defaultValue={toy?.price}
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label
                                            className="label"
                                            htmlFor="rating"
                                        >
                                            <span className="label-text">
                                                Rating
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            id="rating"
                                            min={0}
                                            max={5}
                                            placeholder="rating"
                                            name="rating"
                                            defaultValue={toy?.rating}
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="quantity">
                                        <span className="label-text">
                                            Available Quantity
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        min={1}
                                        placeholder="quantity"
                                        name="quantity"
                                        defaultValue={toy?.quantity}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label
                                        className="label"
                                        htmlFor="description"
                                    >
                                        <span className="label-text">
                                            Detail Description
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered h-24 text-[16px]"
                                        name="description"
                                        placeholder="description"
                                        defaultValue={toy?.description}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">
                                        Add Toy
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;
