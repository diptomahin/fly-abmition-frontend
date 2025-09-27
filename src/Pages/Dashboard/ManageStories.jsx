import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CheckCircle, FileText } from "lucide-react";

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all testimonials from backend
  const fetchStories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/testimonials");
      const data = await res.json();
      if (data.success) {
        setStories(data.data);
      } else {
        Swal.fire("Error", "Failed to fetch stories", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Server not reachable", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // Delete story
  const handleDelete = async (_id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete the testimonial permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/api/testimonials/${_id}`, {
          method: "DELETE",
        });
        const result = await res.json();
        if (result.success) {
          Swal.fire("Deleted!", result.message, "success");
          fetchStories(); // refresh list
        } else {
          Swal.fire("Error", result.error || "Failed to delete", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Server not reachable", "error");
      }
    }
  };

  // Update story (simple prompt for demonstration)
  const handleUpdate = async (story) => {
    const newText = await Swal.fire({
      title: "Update Testimonial Text",
      input: "textarea",
      inputLabel: "Text",
      inputValue: story.text,
      showCancelButton: true,
    });

    if (newText.isConfirmed) {
      try {
        const formData = new FormData();
        formData.append("text", newText.value);
        const res = await fetch(`http://localhost:5000/api/testimonials/${story._id}`, {
          method: "PUT",
          body: formData,
        });
        const result = await res.json();
        if (result.success) {
          Swal.fire("Updated!", result.message, "success");
          fetchStories();
        } else {
          Swal.fire("Error", result.error || "Failed to update", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Server not reachable", "error");
      }
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Manage Stories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No stories found.</p>
        )}

        {stories.map((story) => (
          <div
            key={story._id}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
          >
            {/* Image or Default Passport Animation */}
            <div className="w-full h-48 mb-4 relative">
              {story.image ? (
                <img
                  src={`http://localhost:5000/${story.image}`}
                  alt={story.author}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex flex-col items-center justify-center shadow-inner animate-pulse">
                  <div className="text-yellow-200 font-bold text-sm mb-2">PASSPORT</div>
                  <div className="text-white font-semibold text-lg">{story.country?.toUpperCase()}</div>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mt-3">
                    {story.author[0]}
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-xs font-semibold">Approved</span>
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{story.author}</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-2">
              {story.role} - {story.country}
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">{story.text}</p>

            <div className="flex gap-3 mt-auto">
              <button
                onClick={() => handleUpdate(story)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(story._id)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageStories;
