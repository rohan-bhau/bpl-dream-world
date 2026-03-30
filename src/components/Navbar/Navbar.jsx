import React from 'react'
import logo from "../../assets/logo.png";
import dollar from "../../assets/dollar_1.png";

const Navbar = ({coin, setCoin}) => {
  return (
    <div className="container mx-auto  flex justify-between items-center bg-base-100 shadow-sm">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
          >
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./fixure">Fixure</a>
            </li>
            <li>
              <a href="./teams">Teams</a>
            </li>
            <li>
              <a href="./schedules">Schedules</a>
            </li>
          </ul>
        </div>
        <div className='h-16 w-16  flex justify-center items-center'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="n hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./fixure">Fixure</a>
            </li>
            <li>
              <a href="./teams">Teams</a>
            </li>
            <li>
              <a href="./schedules">Schedules</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="btn btn-soft cursor-text ">
            {coin} coin
            <img src={dollar} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
