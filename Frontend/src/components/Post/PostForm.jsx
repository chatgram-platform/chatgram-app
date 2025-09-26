import { useState } from "react";
import API from "../../api/api";
import React from "react";

export default function PostForm({ onPostCreated }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Post cannot be empty 😅");

    try {
      await API.post("/posts", { content });
      setContent("");
      onPostCreated();
    } catch (err) {
      alert("Failed to create post ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <textarea
        className="w-full border rounded p-2"
        placeholder="What's on your mind? 💭"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
        Post 🚀
      </button>
    </form>
  );
}
