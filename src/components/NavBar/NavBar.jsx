import React from "react";

import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";

const NavBar = () => {
  return (
    <nav className="py-4 my-8">
      <ul className="flex items-center gap-8">
        <li className="font-bold mr-auto text-2xl">Biro</li>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <Link to="blogs">
          <li>Blogs</li>
        </Link>
        <li>Pages</li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li className="flex items-center ml-auto gap-2">
          <form>
            <div className="relative ">
              <input
                type="text"
                placeholder="Search"
                className="outline-0 bg-gray-100  py-1 px-2 rounded-md pr-8"
              />

              <MdOutlineSearch
                color="gray"
                className="absolute top-2 right-3"
              />
            </div>
          </form>
          <div className="flex items-center gap-2 ml-6">
            <img
              src={avatar}
              alt="man"
              className="w-8 h-8 rounded-full border-[1px] "
            />
            <p className="text-gray-500 text-xs md:text-base">username</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
