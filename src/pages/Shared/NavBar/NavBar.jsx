import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import LegoLogo from "../../../assets/logos/Lego_logo.jpeg";
import "./NavBar.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { useValidateImageURL } from "use-validate-image-url";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const userPhotoUrlStatus = useValidateImageURL(user?.photoURL);

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "nav-link-active"
                            : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-toys"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "nav-link-active"
                            : ""
                    }
                >
                    All Toys
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            to="/my-toys"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "nav-link-active"
                                    : ""
                            }
                        >
                            My Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-a-toy"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "nav-link-active"
                                    : ""
                            }
                        >
                            Add A Toy
                        </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "nav-link-active"
                            : ""
                    }
                >
                    Blogs
                </NavLink>
            </li>
        </>
    );

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire(
                    "Logged Out",
                    "You have been successfully logged out.",
                    "success"
                );
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="navbar bg-base-100 mt-5 flex-col sm:flex-row items-start gap-y-6">
            <div className="sm:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <img src={LegoLogo} className="w-10 rounded-sm ml-2" alt="" />
                <a className="btn btn-ghost normal-case text-xl">Lego Sets</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="sm:navbar-end z-10 ml-4 sm:ml-0">
                {user ? (
                    userPhotoUrlStatus === "valid" ? (
                        <>
                            <div className="flex items-center gap-x-2">
                                <span
                                    className="user-name-tooltip  mr-2"
                                    data-tooltip-content={user?.displayName}
                                >
                                    <img
                                        src={user?.photoURL}
                                        className="h-[40px] w-[40px] rounded-full"
                                    ></img>
                                </span>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-accent"
                                >
                                    Log Out
                                </button>
                                <Tooltip anchorSelect=".user-name-tooltip" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-x-2">
                                <span
                                    className="user-name-tooltip mr-2"
                                    data-tooltip-content={user?.displayName}
                                >
                                    <FaUserCircle className="text-[40px]"></FaUserCircle>
                                </span>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-accent"
                                >
                                    Log Out
                                </button>
                                <Tooltip anchorSelect=".user-name-tooltip" />
                            </div>
                        </>
                    )
                ) : (
                    <Link to="/login" className="btn btn-accent mr-2">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
