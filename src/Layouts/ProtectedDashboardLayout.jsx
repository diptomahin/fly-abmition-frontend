import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { Eye, EyeOff } from "lucide-react"; // 👀 Icons

const ProtectedDashboardLayout = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "mySecret123"; // 🔒 Hardcoded password

  useEffect(() => {
    const savedAuth = localStorage.getItem("dashboardAuth");
    if (savedAuth === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.trim() === correctPassword) {
      setAuthenticated(true);
      localStorage.setItem("dashboardAuth", "true");
      setError("");
      setPassword("");
    } else {
      setError("❌ Incorrect password. Try again!");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
            Dashboard Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <DashboardLayout />;
};

export default ProtectedDashboardLayout;
