import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="bg-gradient-to-r from-green-200 via-purple-200 to-blue-200 shadow-sm hover:shadow-md transition rounded-2xl p-5 mb-4 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
          {post.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">@{post.username}</h3>
          <span className="text-xs text-gray-400">Post ID: {post.id}</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 mt-3 leading-relaxed">{post.content}</p>
    </div>
  );
}
