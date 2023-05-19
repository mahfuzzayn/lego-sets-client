import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThirdPartyLogIn from "../ThirdPartyLogIn/ThirdPartyLogIn";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    useTitle("Login");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || "/";

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        setSuccess("");
        setError("");

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess("User logged in successfully.");
                form.reset();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const message = error.message;
                setError(message);
                console.log(message);
            });
    };

    return (
        <div className="login mt-[130px]">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-2 md:p-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold px-2">Please Login</h1>
                        <p className="px-2 py-6">
                            Welcome to our login page! Whether you're a
                            returning user or new to our platform, we're here to
                            make your login experience seamless and secure.
                            Simply enter your credentials and gain access to all
                            the features and benefits our website has to offer.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body p-4 sm:p-6 md:p-8">
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
                                from={from}
                            ></ThirdPartyLogIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
