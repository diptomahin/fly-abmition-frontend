import React from "react";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

const App = () => {
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04 0z" />
    </svg>
  );

  const PinterestIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.728-2.257 5.273-.686.775-1.328 1.227-2.003 1.227-.324 0-.738-.252-.738-.252s-.414 1.569-.515 1.923c-.303 1.073-1.147 2.142-1.147 2.142s-.791-.791-.791-2.003c0-.772.161-1.677.323-2.509.182-.934.411-1.804.411-1.804s-.374-.748-.374-1.854c0-1.736 1.006-3.032 2.257-3.032 1.064 0 1.577.798 1.577 1.755 0 1.069-.68 2.669-1.03 4.149-.293 1.238.622 2.246 1.846 2.246 2.216 0 3.715-2.843 3.715-6.188 0-2.552-1.715-4.467-4.833-4.467-3.536 0-5.802 2.62-5.802 5.567 0 1.018.302 1.734.761 2.246.211.25.241.352.165.638-.056.207-.185.731-.237.936-.075.297-.307.404-.594.293-1.67-.681-2.447-2.507-2.447-4.543 0-3.368 2.735-7.464 8.133-7.464 4.343 0 7.186 3.117 7.186 6.457 0 4.407-2.468 7.69-6.133 7.69-1.234 0-2.397-.662-2.794-1.512 0 0-.666 2.629-.807 3.062-.21.625-.624 1.227-.992 1.705.892.274 1.841.422 2.829.422 6.626 0 12-5.374 12-12 0-6.626-5.374-12-12-12z" />
    </svg>
  );

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Education Section */}
      <div className="relative flex-1 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_2.mp4" type="video/mp4" />
        </video>
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-[#f26b24] bg-opacity-80 group-hover:bg-purple-800 group-hover:opacity-90 transition-all duration-500 opacity-60"></div>
        <div className="p-2 relative z-10 flex flex-col items-start justify-center h-full text-white space-y-6">
          <h1 className=" text-3xl md:text-6xl font-bold">Education</h1>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            <TikTokIcon />
            <Twitter className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            <Linkedin className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
            <PinterestIcon />
          </div>
          {/* Button */}
          <Link to={'/education/home'}><button className="bg-inherit bg-opacity-20 hover:bg-opacity-30 text-white p-3 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white border-opacity-30 hover:bg-white hover:text-[#4f2e89]">
            Visit Now
          </button></Link>
        </div>
      </div>
       {/* === Centered Logo Over Both Sections === */}
      <div className="inset-x-0 absolute flex justify-center top-50 md:top-70 lg:top-50 z-20 pointer-events-none">
        <div className="text-white font-bold">
          <img className="w-sm md:w-lg" src="/public/logo.png" alt="Fly Ambition Logo" />
        </div>
      </div>
      {/* Employment Section */}
      <div className="relative flex-1 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#4f2e89] bg-opacity-60 group-hover:bg-purple-800 group-hover:opacity-80 transition-all duration-500 opacity-60"></div>
        <div className="relative z-10 flex items-center justify-end h-full text-white px-16">
          <div className="flex flex-col items-end space-y-6">
            <h1 className="text-3xl md:text-6xl font-bold">Employment</h1>
            {/* Social Icons */}
            <div className="flex space-x-6">
              <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
              <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
              <Youtube className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform cursor-pointer" />
              <TikTokIcon />
              <Twitter className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              <Linkedin className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              <PinterestIcon />
            </div>
            {/* Button */}
            <button 
              onClick={() => window.location.href = '/employment/home'}
              className="bg-inherit bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white border-opacity-30 hover:bg-[#f26b24] w-fit"
            >
              Visit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;