import { useState } from "react";
import API from "../../api/api";
import React from "react";

export default function PostForm({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [title,setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Post cannot be empty ");

    try {
      const res=await API.post("/posts", { content,title:"title of the post" });
      console.log("response:",res);
      setContent("");
      onPostCreated();
    } catch (err) {
      console.log("error:",err);
      alert("Failed to create post ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-green-200 via-purple-200 to-blue-200 shadow-md rounded-lg p-4 mb-4">
      <textarea
        className="w-full border rounded p-2"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
        Post
      </button>
    </form>
  );
}
