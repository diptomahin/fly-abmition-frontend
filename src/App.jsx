import React, { useState, useEffect } from "react";
import { Facebook, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router";

const imagesEmployment = [
  "/images/employment1.webp",
  "/images/employment2.webp",
  "/images/employment3.webp",
];

const imagesEducation = [
  "/images/education1.webp",
  "/images/education2.webp",
  "/images/education3.webp",
];

const SlideshowBackground = ({ images, overlayColor, children }) => {
  const [index, setIndex] = useState(0);
  const duration = 10000; // 10 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images.length]);

  // Preload the next image for smooth transition
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [index, images]);

  return (
    <div className="relative flex-1 overflow-hidden group">
      {/* Only render current image */}
      <img
        src={images[index]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        loading="lazy"
      />

      {/* Persistent subtle dark gradient */}
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
              <a
                href="https://www.facebook.com/share/1Fj1Kyk29c/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer " />
              </a>
              <a
                href="https://www.instagram.com/flyambitionbd?igsh=NWp3NWIyODRvN2Fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a
                href="https://maps.app.goo.gl/1QjWSv7THrUT2hnn8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
              </a>
            </div>
            {/* Button */}
          <Link to={"/employment/home"}>
            <button className="bg-inherit bg-opacity-20 hover:bg-opacity-30 text-white p-3 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white border-opacity-30 hover:bg-white hover:text-[#4f2e89]">
              Visit Now
            </button>
          </Link>
          </div>
        </div>
      </SlideshowBackground>

      {/* === Centered Logo Over Both Sections === */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <img
          className="w-40 md:w-64 lg:w-72"
          src="/logo-2.webp"
          alt="Fly Ambition Logo"
        />
      </div>

      {/* Education Section */}
      <SlideshowBackground images={imagesEducation} overlayColor="bg-[#f26b24]">
        <div className="p-2 flex flex-col items-start justify-center h-full text-white space-y-6">
          <h1 className=" text-3xl md:text-6xl font-bold">Education</h1>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/share/1Fj1Kyk29c/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer " />
            </a>
            <a
              href="https://www.instagram.com/flyambitionbd?igsh=NWp3NWIyODRvN2Fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            </a>
            <a
              href="https://maps.app.goo.gl/1QjWSv7THrUT2hnn8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
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
