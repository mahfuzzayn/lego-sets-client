import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThirdPartyLogIn from "../ThirdPartyLogIn/ThirdPartyLogIn";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    useTitle("Register");

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        // console.log(name, email, password, photoURL);

        setSuccess("");
        setError("");

        registerUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUserProfile(user, name, photoURL)
                    .then(() => {
                        setSuccess("Registration is done successfully.");
                        form.reset();
                        // console.log(result);
                    })
                    .catch((error) => {
                        const message = error.message;
                        setError(message);
                        console.log(error);
                    });
                // console.log(user);
            })
            .catch((error) => {
                const message = error.message;
                setError(message);
                console.log(error);
            });
    };

    return (
        <div className="login mt-[130px]">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-2 md:p-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold px-2">
                            Please Register
                        </h1>
                        <p className="px-2 py-6">
                            Welcome to our registration page! We're excited to
                            have you join our community. Creating an account is
                            quick and easy, opening the door to a world of
                            possibilities. Simply fill out the required fields
                            below, including your personal information and
                            preferred login credentials.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body p-4 sm:p-6 md:p-8">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label" htmlFor="name">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="name"
                                        name="name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                        name="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="password">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label
                                        className="label"
                                        htmlFor="photo-url"
                                    >
                                        <span className="label-text">
                                            Photo URL
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
                                {success && (
                                    <label className="label">
                                        <span className="label-text-alt text-green-500">
                                            {success}
                                        </span>
                                    </label>
                                )}
                                {error && (
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">
                                            {error}
                                        </span>
                                    </label>
                                )}
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">
                                        Register
                                    </button>
                                    <label className="label mt-2">
                                        <span className="label-text-alt">
                                            Already have an Account?{" "}
                                            <Link
                                                to="/login"
                                                className="text-accent link link-hover"
                                            >
                                                Login
                                            </Link>
                                        </span>
                                    </label>
                                </div>
                            </form>
                            <ThirdPartyLogIn
                                setSuccess={setSuccess}
                                setError={setError}
                            ></ThirdPartyLogIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
