import React from "react";
import img1 from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  const navData = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/service"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
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
            id="sidebar"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navData}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="h-16" src={img1} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul id="sidebar" className="menu menu-horizontal px-3 text-xl">
          {navData}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle text-2xl">
            <HiOutlineShoppingBag/>
        </button>
        <button className="btn btn-ghost btn-circle">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <a className="btn btn-outline ml-4 border-orange-600 text-orange-600 hover:text-white outline-none hover:border-none hover:outline-none hover:bg-orange-600">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Header;
