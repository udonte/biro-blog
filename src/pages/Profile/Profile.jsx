import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroImage from "../../assets/images/hero-image.png";
import avatar from "../../assets/images/avatar.jpg";
import blogData from "../../Data";
import Footer from "../../components/Footer/Footer";
import CustomDropdown from "../../components/CustomDropdown";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete, MdDeleteForever } from "react-icons/md";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [saveProfile, setSaveProfile] = useState(true);

  const [formData, setFormData] = useState({
    picture: "",
    name: "",
    gender: "",
    phone_no: "",
    location: "",
    description: "",
  });

  const handleEditProfile = () => {
    setEditProfile(true);
    setSaveProfile(false);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaveProfile(true);
    setEditProfile(false);
    console.log(formData);
  };

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

        {/* cover profile */}
        {saveProfile && (
          <div className=" bg-gray-100 w-full">
            <div className="flex flex-col items-center justify-center gap-4  p-8 md:w-1/2 mx-auto ">
              <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                <img
                  src={avatar}
                  alt="man"
                  className="w-12 h-12 rounded-full border-[1px]"
                />
                <div className="flex flex-col justify-start sm:text-center md:text-left">
                  <p className="text-gray-600 font-bold text-sm md:text-base">
                    George Udonte
                  </p>
                  <p className="text-gray-500  text-xs md:text-xs">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p>
                  Meet George Debugger, a passionate writer and blogger with a
                  love for technology and travel. George holds a degree in
                  Computer Science and has spent years working in the tech
                  industry, gaining a deep understanding of the impact
                  technology has on our lives.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleEditProfile}
                  className="border-2 border-gray-200 bg-gray-400 py-1 px-2 rounded-md mt-8 text-gray-200 cursor-pointer hover:bg-gray-500"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
        {editProfile && (
          <div className="flex flex-col bg-gray-100 w-full">
            {/* edit profle */}
            <div className="md:w-1/2 mx-auto p-8">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-base text-center">
                  Edit your Author Profile
                </p>
                <form>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Author's Picture</label>
                    <input
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md outline-none focus:border-[1px] focus:border-green-400"
                      type="file"
                      name="picture"
                      value={formData.picture}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Author's Name</label>
                    <input
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md outline-none focus:border-[1px] focus:border-green-400"
                      type="text"
                      placeholder="FirstName and Surname"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <CustomDropdown
                      placeHolder="Male or Female"
                      label="Gender"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                      ]}
                      onSelect={(selectedOption) => {
                        handleDropdownSelect("gender", selectedOption);
                      }}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Phone No</label>
                    <input
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md focus:border-[1px] outline-none focus:border-green-400"
                      type="text"
                      placeholder="Phone Number"
                      name="phone_no"
                      value={formData.phone_no}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Location</label>
                    <input
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md outline-none focus:border-[1px] focus:border-green-400"
                      type="text"
                      placeholder="City, Country"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label htmlFor="customer">Bio</label>
                    <textarea
                      placeholder="Tell us everything about you"
                      rows={15}
                      className="p-3 w-full h-14 border bg-slate-50 rounded-md focus:border-[1px] focus:border-green-400"
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <button
                      className="p-3 w-full h-14 border rounded-md bg-green-400 hover:bg-green-500 text-white font-bold"
                      onClick={handleSaveProfile}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Published post */}
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
                  <p className="text-gray-500 font-bold">{blog.authorName}</p>
                  <p className="text-gray-500 font-light">{blog.date}</p>
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
                  <div className="flex items-center gap-2 ml-auto cursor-pointer text-red-600 hover:text-red-700">
                    <MdDeleteForever size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center my-8">
          <button className="border-2 border-gray-200 bg-gray-100 py-1 px-2 rounded text-gray-500 cursor-pointer">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
