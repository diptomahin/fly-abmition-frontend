import React, { useState } from "react";
import Swal from "sweetalert2";

const AddStories = () => {
  const [formData, setFormData] = useState({
    author: "",
    role: "",
    country: "",
    text: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("author", formData.author);
    data.append("role", formData.role);
    data.append("country", formData.country);
    data.append("text", formData.text);
    if (image) data.append("image", image);

    try {
      const res = await fetch("https://api.flyambitionbd.com/api/testimonials", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      Swal.fire({
        icon: result.success ? "success" : "error",
        title: result.success ? "Success!" : "Oops!",
        text: result.message || (result.success ? "Testimonial added!" : "Error submitting testimonial"),
        timer: 3000,
        showConfirmButton: false,
      });

      if (result.success) {
        setFormData({ author: "", role: "", country: "", text: "" });
        setImage(null);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit testimonial",
      });
    }
  };

  return (
    <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Add Testimonial</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

        <input
          type="text"
          name="author"
          placeholder="Full Name"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="text"
          placeholder="Testimonial text"
          value={formData.text}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Passport/Visa Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />
          {image && <p className="text-sm text-gray-500">Selected: {image.name}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStories;
