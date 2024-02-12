import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import travelImg from "../../assets/images/travel.png";
import avatar from "../../assets/images/avatar.jpg";

const Blog = () => {
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <NavBar />
        <div className="flex flex-col gap-4 justify-start lg:w-[50%] lg:mx-auto sm:w-full">
          <div className="bg-blue-800 sm:text-xs md:text-sm text-white py-1 px-2 rounded w-fit">
            Technology
          </div>
          <p className="font-bold text-sm md:text-3xl">
            Travel and Tourism: The Modern Day Trends
          </p>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="man"
              className="w-8 h-8 rounded-full border-[1px] "
            />
            <p className="text-gray-500 text-xs md:text-base">George Udonte</p>
            <p className="text-gray-500 font-light text-xs md:text-base">
              August 20, 2022
            </p>
          </div>
          <div>
            <img src={travelImg} alt="travel" />
          </div>
          <div className="mb-16">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels. One of the most rewarding
            aspects of traveling is immersing yourself in the local culture and
            customs. This includes trying local cuisine, attending cultural
            events and festivals, and interacting with locals. Learning a few
            phrases in the local language can also go a long way in making
            connections and showing respect.
            <br />
            <br />
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In hendrerit gravida
            rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
            <br />
            <br />
            Finally, don't forget to capture memories of your journey. Whether
            it's through photographs, journaling, or souvenirs, preserving the
            moments and experiences of your travels can bring joy and nostalgia
            for years to come. However, it's also essential to be present in the
            moment and not let technology distract you from the beauty of your
            surroundings.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
