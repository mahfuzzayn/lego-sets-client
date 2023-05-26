import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    useTitle("Add A Toy");

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toy = {
            photoURL,
            name,
            sellerName,
            email,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };
        // console.log(toy);

        fetch("https://lego-sets-server.vercel.app/add-a-toy", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toy),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    form.reset();
                    toast.success(`${name} toy added successfully.`, {
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
        <div className="add-a-toy mt-[50px] md:mt-[100px] md:mx-5">
            <div className="hero">
                <div className="hero-content w-full flex-col p-0 sm:p-2 md:p-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl text-center font-bold">
                            Add A Toy
                        </h1>
                    </div>
                    <div className="card w-full">
                        <div className="card-body p-4 sm:p-6 md:p-8">
                            <form onSubmit={handleUpdateToy}>
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
                                        defaultValue="Lego City"
                                    >
                                        <option>Lego City</option>
                                        <option>Lego Star Wars</option>
                                        <option>Lego Cars</option>
                                        <option>Lego Architecture</option>
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

export default AddAToy;
