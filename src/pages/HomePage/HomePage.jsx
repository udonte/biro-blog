import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroImage from "../../assets/images/hero-image.png";
import avatar from "../../assets/images/avatar.jpg";
import blogData from "../../Data";
import Footer from "../../components/Footer/Footer";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete, MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <NavBar />

        {/* hero section */}
        <div
          className="flex flex-col justify-end  bg-cover bg-center sm:h-64 md:h-[500px] rounded-xl"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="flex flex-col justify-start items-center md:items-start gap-4 w-full md:w-1/2 rounded-md p-2 md:p-8">
            <div className="bg-blue-800 sm:text-xs md:text-sm text-white py-1 px-2 rounded">
              Technology
            </div>
            <p className="font-bold text-sm md:text-3xl text-white sm:text-center md:text-left sm:w-1/2 md:w-full">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt="man"
                className="w-8 h-8 rounded-full border-[1px] "
              />
              <p className="text-gray-200 text-xs md:text-base">
                George Udonte
              </p>
              <p className="text-gray-200 font-light text-xs md:text-base">
                August 20, 2022
              </p>
            </div>
          </div>
        </div>

        {/* latest post */}
        <div className="my-24">
          <div className="my-8">
            <p className="text-2xl font-bold">Latest Posts</p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4 sm:flex sm:flex-col justify-start gap-6">
            {blogData.map((blog, id) => (
              <div
                key={id}
                onClick={() => navigate("/blogs/:id")}
                className="flex flex-col justify-start border-[1px] border-gray-200 p-4 rounded-md gap-4 cursor-pointer hover:shadow-md hover:border-gray-400"
              >
                <div className="aspect-w-1 aspect-h-1 ">
                  <img
                    src={HeroImage}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="bg-gray-100 text-blue-800 w-fit rounded py-1 px-2">
                  {blog.category}
                </p>
                <p className="font-bold text-2xl">{blog.title}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={blog.authorImage}
                    alt="man"
                    className="w-8 h-8 rounded-full border-[1px] "
                  />
                  <p className="text-gray-500 font-bold text-sm">
                    {blog.authorName}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-gray-500 font-light text-sm">
                      {blog.date} |
                    </p>
                    <p className="text-gray-500 font-light text-sm">12.40pm</p>
                  </div>
                </div>
                {/* actions */}
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaEye />
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineLike />
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCommentDots />
                    <p>0</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center my-8">
          <button className="border-2 border-gray-200 bg-gray-100 py-1 px-2 rounded text-gray-500 cursor-pointer">
            View All Post
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
