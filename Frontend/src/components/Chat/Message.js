export default function Message({ msg }) {
  return (
    <div
      className={`p-2 my-1 rounded-lg ${
        msg.sender_id === "me" ? "bg-blue-100 text-right" : "bg-gray-200"
      }`}
    >
      {msg.content}
    </div>
  );
}
