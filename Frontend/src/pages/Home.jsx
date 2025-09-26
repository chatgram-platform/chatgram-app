import React, { useEffect, useState, useRef } from "react";
import API from "../api/api";
import StoryCard from "../components/Story/StoryCard";
import PostForm from "../components/Post/PostForm";
import PostCard from "../components/Post/PostCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate()

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  const fetchStories = async () => {
    const res = await API.get("/stories");
    setStories(res.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchStories();
  }, []);

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">ChatGram</h2>
        <span className="text-gray-400">🌐 Feed</span>
      </header>

      {/* Stories Section */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Stories</h3>

        {/* Carousel container */}
        <div
          ref={scrollRef}
          style={{
            scrollbarWidth:"none"
          }}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2"
        >
          {stories.map((story, i) => (
            <div
             onClick={()=>navigate("/stories")}
              key={i}
              className="flex-shrink-0 snap-center transform transition-transform duration-300 hover:scale-110"
              style={{ minWidth: "160px" }}
            >
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </section>

      {/* Create Post Form */}
      <section className="mb-6">
        <PostForm onPostCreated={fetchPosts} />
      </section>

      {/* Posts Feed */}
      <section>
        {posts.length ? (
          posts.map((post, i) => <PostCard key={i} post={post} />)
        ) : (
          <p className="text-gray-400 text-center mt-4">
            No posts yet. Be the first to post!
          </p>
        )}
      </section>
    </div>
  );
}
