import { useState } from "react";
import API from "../api/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      alert("Registration successful 🎉 Now login!");
    } catch (err) {
      alert("Registration failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">Join ChatGram 🚀</h2>
        <input
          type="text"
          className="w-full border p-2 mb-2 rounded"
          placeholder="Username 😎"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full border p-2 mb-2 rounded"
          placeholder="Email 📧"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-2 mb-2 rounded"
          placeholder="Password 🔒"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Register 🚀
        </button>
      </form>
    </div>
  );
}
