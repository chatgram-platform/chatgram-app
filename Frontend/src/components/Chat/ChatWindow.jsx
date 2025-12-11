import React from 'react'
import { useEffect, useState } from "react";
import API from "../../api/api";
import Message from "./Message";

export default function ChatWindow({ recipientId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      const res = await API.get(`/chat/${recipientId}`);
      setMessages(res.data);
    };
    fetchChat();
  }, [recipientId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await API.post("/chat/send", { recipientId, content: text });
    setMessages([...messages, { content: text, sender_id: "me" }]);
    setText("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      <div className="h-64 overflow-y-scroll mb-2 border-b border-gray-300">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="border border-gray-300 flex-grow p-2 rounded focus:outline-none focus:border-blue-400"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button className="bg-blue-400 text-white px-4 rounded hover:bg-blue-500 transition">
          Send
        </button>
      </form>
    </div>
  );
}
