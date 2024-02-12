import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroImage from "../../assets/images/hero-image.png";
import avatar from "../../assets/images/avatar.jpg";
import blogData from "../../Data";
import Footer from "../../components/Footer/Footer";
import { FaEye, FaRegCommentDots, FaRegImage } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {
  MdDeleteForever,
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from "react-icons/md";
import CustomDropdown from "../../components/CustomDropdown";

const Blogs = () => {
  const [formData, setFormData] = useState({
    category: "",
    heading: "",
    summary: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  return (
    <div>
      <div className="w-[70%] mx-auto">
        <NavBar />

        {/* cover blog post */}
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="font-bold text-2xl mb-2">New Post</p>
          </div>
          <div className="flex flex-col bg-gray-100 w-full">
            {/* edit profle */}
            <div className="md:w-1/2 mx-auto p-8">
              <div>
                <form>
                  <div className="w-full mb-4">
                    <CustomDropdown
                      placeHolder="Male or Female"
                      label="Category"
                      options={[
                        {
                          value: "tech",
                          label:
                            "Technology (Programming, ICT, Engineering, Science etc)",
                        },
                        {
                          value: "politics",
                          label:
                            "Politics (Current Affairs, Economy, Diplomacy etc)",
                        },
                        { value: "religion", label: "Religion" },
                        {
                          value: "business",
                          label:
                            "Business/Career (Job, Profession, Company etc)",
                        },
                        {
                          value: "travel",
                          label:
                            "Travel (Excursion, Tourism, Documentary, Relocation etc)",
                        },
                        {
                          value: "motivation",
                          label: "Motivation (Stories, Messages etc)",
                        },
                        {
                          value: "general",
                          label:
                            "General (Entertainment, Reviews & Other Fields)",
                        },
                      ]}
                      onSelect={(selectedOption) => {
                        handleDropdownSelect("category", selectedOption);
                      }}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Heading</label>
                    <input
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md outline-none focus:border-[1px] focus:border-green-400"
                      type="text"
                      placeholder="Heading"
                      name="heading"
                      value={formData.heading}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Summary</label>
                    <textarea
                      placeholder="25 word summary of your post"
                      rows={15}
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md focus:border-[1px] focus:border-green-400"
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* formattings */}
                  <div className="w-full my-8">
                    <div className="flex gap-2 items-center flex-wrap border-[1px] border-gray-300 px-2 py-2 rounded bg-white">
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        B
                      </strong>
                      <strong className="ursor-pointer hover:bg-gray-200 px-1">
                        <i>i</i>
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        {" "}
                        <u>U</u>
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        {" "}
                        <strike>S</strike>
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        {" "}
                        X<sub>2</sub>
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        {" "}
                        X<sup>2</sup>
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 p-1">
                        <MdFormatAlignLeft />
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 p-1">
                        <MdFormatAlignCenter />
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 p-1">
                        <MdFormatAlignRight />
                      </strong>

                      <strong className="cursor-pointer hover:bg-gray-200 p-1">
                        <FaRegImage />
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1 text-xs">
                        F1
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1 text-sm">
                        F2
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1 text-base">
                        F3
                      </strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1 text-lg">
                        F4
                      </strong>
                      <strong className="cursor-pointer px-1 text-lg w-6 h-4 bg-red-500 "></strong>
                      <strong className="cursor-pointer px-1 text-lg w-6 h-4 bg-blue-500 "></strong>
                      <strong className="cursor-pointer px-1 text-lg w-6 h-4 bg-green-500 "></strong>
                      <strong className="cursor-pointer px-1 text-lg w-6 h-4 bg-gray-500 "></strong>
                      <strong className="cursor-pointer hover:bg-gray-200 px-1">
                        {"</>"}
                      </strong>
                    </div>
                  </div>

                  <div className="w-full mb-4">
                    <label htmlFor="customer">Content</label>
                    <textarea
                      placeholder="Type your content"
                      rows={45}
                      cols={45}
                      className="p-3 w-full h-56 border bg-slate-50 rounded-md focus:border-[1px] focus:border-green-400 overflow-y-scroll"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <button
                      className="p-3 w-full h-14 border rounded-md bg-green-400 hover:bg-green-500 text-white font-bold"
                      // onClick={handleSaveProfile}
                    >
                      Publish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* latest post */}
        <div className="my-24">
          <div className="my-8">
            <p className="text-2xl font-bold">
              Published Posts: {blogData.length}{" "}
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4 sm:flex sm:flex-col justify-start gap-6">
            {blogData.map((blog, id) => (
              <div
                key={id}
                className="flex flex-col justify-start border-[1px] border-gray-200 p-4 rounded-md gap-4"
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

        {/* Comments */}
        <div className="my-24">
          <div className="my-8">
            <p className="text-2xl font-bold">Comments: {blogData.length} </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4 sm:flex sm:flex-col justify-start gap-6">
            {blogData.map((blog, id) => (
              <div
                key={id}
                className="flex flex-col justify-start border-[1px] border-gray-200 p-4 rounded-md gap-4"
              >
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
                {/* comment */}
                <div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi minima perferendis voluptas fugit!
                    </p>
                  </div>
                </div>
                {/* actions */}
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <AiOutlineDislike />
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineLike />
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <MdDeleteForever />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
