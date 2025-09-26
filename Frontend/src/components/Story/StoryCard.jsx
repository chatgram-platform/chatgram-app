import React from "react";

export default function StoryCard({ story }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 text-white p-5 rounded-2xl shadow-lg mb-4 border border-white/20">
      
      {/* Header with avatar and username */}
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center font-bold text-white">
          {story.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="font-semibold text-white">@{story.username}</h4>
          <span className="text-xs text-white/80">
            {story.timePosted ? story.timePosted : "Just now"}
          </span>
        </div>
      </div>

      {/* Story content */}
      <p className="mt-4 text-sm leading-relaxed">{story.content}</p>

      {/* Optional footer metadata */}
      {story.storyType && (
        <span className="mt-3 inline-block text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full">
          {story.storyType}
        </span>
      )}
    </div>
  );
}
