export default function StoryCard({ story }) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-4 rounded-lg shadow-md mb-4">
      <h4 className="font-bold">@{story.username}</h4>
      <p className="mt-2">{story.content}</p>
    </div>
  );
}
