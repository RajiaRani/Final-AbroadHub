import { useEffect, useState } from "react";

export default function Dashboard() {
  const [savedUniversities, setSavedUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSavedUniversities = async () => {
      try {
        const response = await fetch(`/api/users/${loggedInUserId}/saved-universities`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        const data = await response.json();

        if (response.ok) {
          setSavedUniversities(data.savedUniversities);
        } else {
          console.error(data.message || 'Failed to fetch saved universities');
        }
      } catch (error) {
        console.error('Error fetching saved universities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedUniversities();
  }, []);

  if (loading) {
    return <div>Loading saved universities...</div>;
  }
  return (
    <div>
      <h1>Your Saved Universities</h1>
      {savedUniversities.length === 0 ? (
        <p>No universities saved yet.</p>
      ) : (
        savedUniversities.map((savedUni) => (
          <div key={savedUni.university_id._id}>
            <h3>{savedUni.university_id.name}</h3>
            <p>{savedUni.university_id.location}</p>
            <p>Saved on: {new Date(savedUni.saved_at).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
