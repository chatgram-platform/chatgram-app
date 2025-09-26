import { useEffect, useState } from "react";
import API from "../api/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await API.get("/users/profile");
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading profile... ⏳</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Profile 👤</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
}
