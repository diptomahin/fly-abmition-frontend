import React, { useState } from "react";
import {
  Plane,
  Hotel,
  ShoppingBag,
  MapPin,
  CreditCard,
  Smartphone,
  Receipt,
  Gift,
  Search,
  Calendar,
  Users,
  ArrowUpDown,
} from "lucide-react";
import { Link } from "react-router";

export default function ShareTripBooking() {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("round");
  const [fareType, setFareType] = useState("regular");
  //   const [travelers, setTravelers] = useState(1);
  //   const [classType, setClassType] = useState('economy');

  const tabs = [
    { id: "flight", label: "Flight", icon: Plane },
    { id: "hotel", label: "Hotel", icon: Hotel },
    { id: "shop", label: "Shop", icon: ShoppingBag },
    { id: "holiday", label: "Holiday", icon: MapPin },
    { id: "visa", label: "Visa", icon: CreditCard },
    { id: "recharge", label: "Mobile Recharge", icon: Smartphone },
    { id: "bill", label: "Pay Bill", icon: Receipt },
    { id: "gift", label: "Gift Card", icon: Gift },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-2/3 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/banner_3.mp4" type="video/mp4" />
      </video>{" "}
      F
      <div className="relative z-10 container mx-auto px-6 py-5">
        {/* Header - Exact match to image */}
        <div className="mt-10 mb-6">
          <h1 className="text-5xl font-bold text-white  tracking-tight mb-2">
            Welcome to <span className="font-bold">ShareTrip</span>!
          </h1>
          <p className="text-lg text-white/90">
            Find Flights, Hotels, Visa & Holidays
          </p>
        </div>

        {/* Main Booking Card - Exact match */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Navigation Tabs - Exact styling */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? "text-orange-600 border-orange-500 bg-orange-50"
                      : "text-gray-600 border-transparent hover:text-gray-800"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Flight Booking Form - Exact match */}
          {activeTab === "flight" && (
            <div className="p-6">
              {/* Trip Type Selection - Exact styling */}
              <div className="flex gap-8 ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === "oneway"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="text-gray-700">One Way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="round"
                    checked={tripType === "round"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Round Trip
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="multi"
                    checked={tripType === "multi"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="text-gray-700">Multi City</span>
                </label>
              </div>

              {/* Traveler and Class Selection */}
              <Link to={"https://sharetrip.net/"}>
                <div className="flex gap-4 mb-6 justify-end">
                  <div className="relative">
                    <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm bg-white hover:bg-gray-50">
                      <Users size={16} />1 Traveller
                    </button>
                  </div>

                  <div className="relative">
                    <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm bg-white hover:bg-gray-50">
                      Economy
                    </button>
                  </div>
                </div>
              </Link>

              {/* Flight Search Form - Exact layout */}
              <Link to={"https://sharetrip.net/"}>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {/* From */}
                  <div className="relative">
                    <div className="border border-gray-300 rounded p-3 bg-white">
                      <div className="text-2xl font-bold text-gray-800">
                        DAC
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Dhaka</div>
                      <div className="text-xs text-gray-400">Bangladesh</div>
                    </div>
                  </div>

                  {/* Swap Button */}
                  <div className="flex justify-center items-center">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <ArrowUpDown size={16} className="text-gray-600" />
                    </button>
                  </div>

                  {/* To */}
                  <div className="relative">
                    <div className="border border-gray-300 rounded p-3 bg-white">
                      <div className="text-2xl font-bold text-gray-800">
                        CXB
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Cox's Bazar
                      </div>
                      <div className="text-xs text-gray-400">Bangladesh</div>
                    </div>
                  </div>

                  {/* Departure Date */}
                  <div className="relative">
                    <div className="border border-gray-300 rounded p-3 bg-white">
                      <div className="text-2xl font-bold text-gray-800">07</div>
                      <div className="text-xs text-gray-500 mt-1">
                        September
                      </div>
                    </div>
                  </div>

                  {/* Return Date */}
                  <div className="relative">
                    <div className="border border-gray-300 rounded p-3 bg-white">
                      <div className="text-2xl font-bold text-gray-800">09</div>
                      <div className="text-xs text-gray-500 mt-1">
                        September
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Fare Type Selection - Exact styling */}
              <div className="flex gap-8 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="fareType"
                    value="regular"
                    checked={fareType === "regular"}
                    onChange={(e) => setFareType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="text-gray-700">Regular Fare</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="fareType"
                    value="student"
                    checked={fareType === "student"}
                    onChange={(e) => setFareType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="text-gray-700">Student Fare</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="fareType"
                    value="umrah"
                    checked={fareType === "umrah"}
                    onChange={(e) => setFareType(e.target.value)}
                    className="text-blue-500 w-4 h-4"
                  />
                  <span className="text-gray-700">Umrah Fare</span>
                </label>
              </div>

              {/* Search Button - Exact styling */}
              <Link to={"https://sharetrip.net/"}>
                <div className="text-right">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium flex items-center gap-2 ml-auto transition-colors">
                    <Search size={18} />
                  </button>
                </div>
              </Link>
            </div>
          )}

          {/* Other Tab Content */}
          {activeTab !== "flight" && (
            <div className="p-8 text-center">
              <div className="py-12">
                <div className="text-6xl mb-4">
                  {activeTab === "hotel" && "🏨"}
                  {activeTab === "shop" && "🛍️"}
                  {activeTab === "holiday" && "🏝️"}
                  {activeTab === "visa" && "📋"}
                  {activeTab === "recharge" && "📱"}
                  {activeTab === "bill" && "💳"}
                  {activeTab === "gift" && "🎁"}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {tabs.find((tab) => tab.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600">Coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
