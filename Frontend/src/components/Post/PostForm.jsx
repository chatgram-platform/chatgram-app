import { useState } from "react";
import API from "../../api/api";
import React from "react";

export default function PostForm({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Post cannot be empty ");

    try {
      const res = await API.post("/posts", { content, title: "title of the post" });
      console.log("response:", res);
      setContent("");
      onPostCreated();
    } catch (err) {
      console.log("error:", err);
      alert("Failed to create post ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-green-100 via-purple-100 to-blue-100 shadow-md rounded-lg p-4 mb-4 border border-gray-200"
    >
      <textarea
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="bg-blue-400 text-white px-4 py-2 mt-2 rounded hover:bg-blue-500 transition">
        Post
      </button>
    </form>
  );
}
