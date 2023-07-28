import Link from "next/link";
import React from "react";

const Header = () => {
  const links = (
    <>
      <li>
        <a>{"eknwfgo"}</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Components</summary>
          <ul className="p-2 bg-slate-200">
            <li>
              <a>CPU 1</a>
            </li>
            <li>
              <a>Motherboard</a>
            </li>
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
        <a className="btn btn-ghost upper-case text-xl">Terabyte</a>
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

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/products"); // internal API connected with mongoDB
//   const data = await res.json();
//   console.log("habvfduewbrfgniowvfgbwsiuv", data);
//   return {
//     props: {
//       products: data.data,
//     },
//     revalidate: 10,
//   };
// };
