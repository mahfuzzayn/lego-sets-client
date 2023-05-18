import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThirdPartyLogIn from "../ThirdPartyLogIn/ThirdPartyLogIn";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        setSuccess("");
        setError("");

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess("User logged in successfully.");
                form.reset();
                console.log(user);
            })
            .catch((error) => {
                const message = error.message;
                setError(message);
                console.log(message);
            });
    };

    return (
        <div className="login mt-[130px] mx-5">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                        <p className="py-6">
                            Welcome to our login page! Whether you're a
                            returning user or new to our platform, we're here to
                            make your login experience seamless and secure.
                            Simply enter your credentials and gain access to all
                            the features and benefits our website has to offer.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                        name="name"
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
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="label-text-alt link link-hover"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
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
                                <div className="form-control mt-2">
                                    <button className="btn btn-accent">
                                        Login
                                    </button>
                                    <label className="label mt-2">
                                        <span className="label-text-alt">
                                            New to Lego Sets?{" "}
                                            <Link
                                                to="/register"
                                                className="text-accent link link-hover"
                                            >
                                                Register
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

export default Login;
