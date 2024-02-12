import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="py-24 bg-gray-100">
      <div className="flex md:flex-row flex-col md:items-start items-center md:justify-between gap-16 md:gap-8 w-[70%] mx-auto text-center md:text-left ">
        <div className="flex flex-col justify-start gap-4 w-[300px] ">
          <p className="font-bold">About</p>
          <div>
            <p className="">
              Biro is a vibrant blog website offering diverse content catering
              to various interests. From insightful articles on technology,
              lifestyle, and travel to thought-provoking pieces on health,
              finance, and more, Biro provides engaging and informative content
              for curious minds.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Email: </span>info@biro.com
            </p>
            <p>
              <span className="font-bold">Phone: </span>9035653117
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="font-bold">Quick Link</p>
          <ul className="mt-4">
            <li>Home</li>
            <li>Posts</li>
            <li>Page</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <p className="font-bold">Category</p>
          <ul className="mt-4">
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start w-fit bg-white p-8 rounded-lg">
          <form>
            <div className="text-center mb-8">
              <p className="font-bold">Weekly NewsLetter</p>
              <p className="text-gray-500">
                Get blog articles and offers via email
              </p>
            </div>
            <div className="relative w-full">
              <input type="email" className="border-2 w-full pr-8 py-1 px-2" />
              <MdEmail
                className="absolute right-2 top-3 outline-none"
                color="gray"
              />
            </div>
            <div className="mt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 w-full rounded font-bold text-sm ">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
