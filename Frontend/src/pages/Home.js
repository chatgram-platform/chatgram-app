import { useEffect, useState } from "react";
import API from "../api/api";
import PostForm from "../components/Post/PostForm";
import PostCard from "../components/Post/PostCard";
import StoryCard from "../components/Story/StoryCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

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
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome to ChatGram 🎉</h2>
      <PostForm onPostCreated={fetchPosts} />
      {stories.map((story, i) => (
        <StoryCard key={i} story={story} />
      ))}
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
}
