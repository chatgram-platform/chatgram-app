import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // if using react-router

export default function Dashboard() {
  const [friends, setFriends] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate(); // for redirecting to chat page

  useEffect(() => {
    fetch('/api/friends') // backend endpoint to get logged-in user's friends
      .then(res => res.json())
      .then(data => setFriends(data))
      .catch(err => console.error(err));
  }, []);

  // Handle searching friend by email
  const handleSearch = async () => {
    if (!searchEmail) return;

    try {
      const res = await fetch(`/api/users/search?email=${searchEmail}`);
      const data = await res.json();

      if (data) {
        setSearchResult(data);
      } else {
        setSearchResult(null);
        alert('No user found with this email');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectFriend = (friend) => {
    navigate(`/chat/${friend.id}`); 
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 border-r p-4 flex flex-col">
        {/* Search Bar */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="flex-1 border rounded-l px-3 py-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 rounded-r"
          >
            Search
          </button>
        </div>

        {/* Search Result */}
        {searchResult && (
          <div
            className="p-2 bg-green-100 rounded cursor-pointer mb-2"
            onClick={() => handleSelectFriend(searchResult)}
          >
            {searchResult.name || searchResult.email}
          </div>
        )}

        {/* Friends List */}
        <h2 className="font-semibold mb-2">Your Friends</h2>
        <ul className="flex-1 overflow-y-auto">
          {friends.map((friend) => (
            <li
              key={friend.id}
              onClick={() => handleSelectFriend(friend)}
              className="p-2 rounded cursor-pointer mb-1 hover:bg-gray-100"
            >
              {friend.name || friend.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
