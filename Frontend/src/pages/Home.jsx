import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import {translations} from "../components/redux/translate"
import { Sun, Moon } from "lucide-react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [chats, setChats] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchStories = async () => {
    try {
      const res = await API.get("/stories");
      setStories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch chats (placeholder)
  const fetchChats = () => {
    setChats([
      { userId: 1, username: "Alice", lastMessage: "Hi there!" },
      { userId: 2, username: "Bob", lastMessage: "Hello!" },
      { userId: 3, username: "Charlie", lastMessage: "What's up?" },
    ]);
  };

  const openChat = (userId) => {
    navigate(`/chat/${userId}`);
  };

  useEffect(() => {
    fetchPosts();
    fetchStories();
    fetchChats();
  }, []);

return (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
    {/* Header */}
    <header className="w-full max-w-4xl flex justify-between items-center mb-12">
      <h1 className="text-5xl font-bold text-indigo-400">ChatGram</h1>
      <nav className="space-x-6">
      
        <button onClick={()=>navigate('/login')}
        className="bg-indigo-500 hover:bg-indigo-600
         text-white px-4 py-2 rounded-lg font-semibold">
          log in
        </button>
      </nav>
    </header>

    {/* Hero Section */}
    <section className="text-center max-w-3xl mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect. Share. Chat.</h2>
      <p className="text-gray-400 mb-6 text-lg md:text-xl">
        ChatGram is the ultimate platform to share your stories, explore what others are sharing, 
        and connect with friends in real-time. Post stories, follow friends, and chat instantly!
      </p>
      <button
        onClick={() => navigate("/register")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-lg" >
        Join Now
      </button>
    </section>

    {/* Features Section */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl text-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Post Stories</h3>
        <p className="text-gray-400">Share your daily moments with your friends and followers.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Explore Stories</h3>
        <p className="text-gray-400">See what your friends are sharing in real-time.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Chat Instantly</h3>
        <p className="text-gray-400">Send messages and connect with your friends anytime.</p>
      </div>
    </section>

    {/* Footer CTA */}
    <footer className="mt-16 text-center">
      <p className="text-gray-500 mb-4">Ready to start your ChatGram journey?</p>
      <button
        onClick={() => navigate("/register")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-lg"
      >
        Get Started Now
      </button>
    </footer>
  </div>
);

}
