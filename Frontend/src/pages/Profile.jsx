import { useEffect, useState } from "react";
import API from "../api/api";
import React from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", bio: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await API.get("/users/profile");
      setProfile(res.data);
      setFormData({
        username: res.data.username,
        email: res.data.email,
        bio: res.data.bio || "",
      });
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await API.put("/users/profile", formData);
      setProfile(formData);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
    setLoading(false);
  };

  if (!profile) return <p className="text-center mt-10">Loading profile... ⏳</p>;

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-gradient-to-r from-green-200 via-purple-300 to-blue-200 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-500 font-bold">
          {profile.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{profile.username}</h2>
          <p className="text-sm text-gray-500">{profile.email}</p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setEditMode(!editMode)}
          className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Form */}
      {editMode && (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      )}

      {/* Bio Display */}
      {!editMode && profile.bio && (
        <p className="text-gray-700 mt-4">{profile.bio}</p>
      )}
    </div>
  );
}
