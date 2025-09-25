export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="font-bold text-blue-600">@{post.username}</h3>
      <p className="text-gray-700 mt-2">{post.content}</p>
      <p className="text-xs text-gray-400 mt-2">Post ID: {post.id}</p>
    </div>
  );
}
