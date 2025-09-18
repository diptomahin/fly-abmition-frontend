import React, { useState, useEffect } from "react";
import { Facebook, Instagram,  Mail  } from "lucide-react";
import { Link } from "react-router";

const imagesEmployment = [
  "https://i.ibb.co.com/W42HnMg2/three-factory-workers-safety-hats-discussing-manufacture-plan.jpg",
  "https://i.ibb.co.com/R4chh2Vr/construction-workers-sunset.jpg",
  "https://i.ibb.co.com/LhvL0v3T/group-workers-organizing-protest.jpg",
];

const imagesEducation = [
  "https://i.ibb.co.com/zVjvqjGM/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-t.jpg",
  "https://i.ibb.co.com/xKSJTQqC/view-palace-culture-iasi-romania.jpg",
  "https://i.ibb.co.com/Ndwx50jZ/college-students-1872810-1280.jpg",
];

const SlideshowBackground = ({ images, overlayColor, children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex-1 overflow-hidden group">
      {/* Background slideshow */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Persistent subtle dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-200 via-black-300to-transparent"></div>

      {/* Colored overlay on hover */}
      <div
        className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-60 transition-all duration-500`}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Employment Section */}
      <SlideshowBackground
        images={imagesEmployment}
        overlayColor="bg-[#4f2e89]"
      >
        <div className="flex items-center justify-end h-full text-white p-4">
          <div className="flex flex-col items-end space-y-6">
            <h1 className="text-3xl md:text-6xl font-bold">Employment</h1>
            {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/1Fj1Kyk29c/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer " />
            </a>
            <a href="https://www.instagram.com/flyambitionbd?igsh=NWp3NWIyODRvN2Fi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            </a>
            <a href="mailto:flyambitionbd@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            </a>
          </div>
            {/* Button */}
            <button
              onClick={() => (window.location.href = "/employment/home")}
              className="bg-inherit bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white border-opacity-30 hover:bg-[#4f2e89] w-fit"
            >
              Visit Now
            </button>
          </div>
        </div>
      </SlideshowBackground>

      {/* === Centered Logo Over Both Sections === */}
      <div className="inset-x-0 absolute flex justify-center top-55 md:top-70 lg:top-65 z-20 pointer-events-none">
        <div className="text-white font-bold">
          <img
            className="w-sm md:w-lg"
            src="https://i.ibb.co/5X9d7Y1m/logo-2.png"
            alt="Fly Ambition Logo"
          />
        </div>
      </div>

      {/* Education Section */}
      <SlideshowBackground images={imagesEducation} overlayColor="bg-[#f26b24]">
        <div className="p-2 flex flex-col items-start justify-center h-full text-white space-y-6">
          <h1 className=" text-3xl md:text-6xl font-bold">Education</h1>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/1Fj1Kyk29c/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer " />
            </a>
            <a href="https://www.instagram.com/flyambitionbd?igsh=NWp3NWIyODRvN2Fi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            </a>
            <a href="mailto:flyambitionbd@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            </a>
          </div>
          {/* Button */}
          <Link to={"/education/home"}>
            <button className="bg-inherit bg-opacity-20 hover:bg-opacity-30 text-white p-3 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white border-opacity-30 hover:bg-white hover:text-[#f26b24]">
              Visit Now
            </button>
          </Link>
        </div>
      </SlideshowBackground>
    </div>
  );
};

export default App;
