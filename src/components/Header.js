import Link from "next/link";
import React from "react";

const Header = () => {
  const categories = [
    { name: "CPU", path: "cpu" },
    { name: "Motherboard", path: "motherboard" },
    { name: "RAM", path: "ram" },
    { name: "Power Supply Unit", path: "power-supply" },
    { name: "Storage Device", path: "storage" },
    { name: "Monitor", path: "monitor" },
    { name: "Others", path: "others" },
  ];
  const links = (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Components</summary>
          <ul className="p-2 bg-slate-200">
            {categories?.map((category, idx) => (
              <li key={idx}>
                <Link href={`/components/${category?.path}`}>
                  {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-200">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost upper-case text-xl">
          Terabyte
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <Link href="/pc-builder" className="btn text-white">
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Header;
