import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Upload } from "lucide-react";

const UpdateStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing story
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`https://api.flyambitionbd.com/api/testimonials/${id}`);
        const data = await res.json();
        if (data.success) {
          setStory(data.data);
          if (data.data.image) {
            setPreview(`https://api.flyambitionbd.com/${data.data.image}`);
          }
        } else {
          Swal.fire("Error", "Failed to fetch story", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Server not reachable", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "type" && value === "Education") {
      setStory((prev) => ({ ...prev, type: value, role: "Student" }));
    } else if (name === "type" && value === "Employment") {
      setStory((prev) => ({ ...prev, type: value, role: "" }));
    } else {
      setStory((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("author", story.author);
    data.append("type", story.type);
    data.append("role", story.role);
    data.append("country", story.country);
    data.append("text", story.text);
    if (image) data.append("image", image);

    try {
      const res = await fetch(`https://api.flyambitionbd.com/api/testimonials/${id}`, {
        method: "PUT",
        body: data,
      });
      const result = await res.json();

      Swal.fire({
        icon: result.success ? "success" : "error",
        title: result.success ? "Updated!" : "Error",
        text: result.message || "Something went wrong",
        timer: 3000,
        showConfirmButton: false,
      });

      if (result.success) navigate("/dashboard/manage-stories");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update story", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!story) return <p className="text-center mt-10">Story not found.</p>;

  return (
    <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Update Story
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <input
          type="text"
          name="author"
          placeholder="Full Name"
          value={story.author}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="type"
          value={story.type}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Employment">Employment</option>
          <option value="Education">Education</option>
        </select>

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={story.role}
          onChange={handleChange}
          required
          disabled={story.type === "Education"}
          className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 ${
            story.type === "Education"
              ? "bg-gray-100 cursor-not-allowed"
              : "focus:ring-blue-500"
          }`}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={story.country}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="text"
          placeholder="Testimonial text"
          value={story.text}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Modern Image Upload Section */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-gray-700">
            Passport/Visa Image:
          </label>

          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-xl p-6 cursor-pointer hover:bg-blue-50 transition"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
            ) : (
              <>
                <Upload size={40} className="text-blue-500 mb-2" />
                <p className="text-gray-600 font-medium">
                  Click to upload or drag & drop
                </p>
                <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 2MB</p>
              </>
            )}
          </label>

          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {image && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              Selected: {image.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStory;
