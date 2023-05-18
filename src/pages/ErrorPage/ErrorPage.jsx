import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page 404 mt-[100px] mb-[130px]">
            <div className="flex flex-col justify-center items-center">
                <div className="picture">
                    <img
                        src="https://www.zergroup.com/view/default/images/404.gif"
                        className="w-full max-w-[640px]"
                        alt=""
                    />
                </div>
                <Link to="/">
                    <button className="btn btn-accent">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
