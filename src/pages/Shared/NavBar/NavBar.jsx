import React from "react";
import { Link, NavLink } from "react-router-dom";
import LegoLogo from "../../../assets/logos/Lego_logo.jpeg";
import "./NavBar.css";

const NavBar = () => {
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

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
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
            <div className="navbar-end">
                <Link to="/login" className="btn btn-accent">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
