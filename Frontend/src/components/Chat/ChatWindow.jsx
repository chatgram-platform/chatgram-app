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
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="h-64 overflow-y-scroll mb-2 border-b">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="border flex-grow p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message ✍️"
        />
        <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
          Send 🚀
        </button>
      </form>
    </div>
  );
}
