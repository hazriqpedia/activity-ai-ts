import { useState } from "react";
import ActivityForm from "../components/ActivityFormv3";
import ActivityList from "../components/ActivityList";
import { Activity } from "../types/Activity";

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSuggest = async (
    minutes: number,
    energyLevel: "low" | "medium" | "high"
  ) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/activities/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ minutes, energyLevel }),
      });

      const data = await res.json();
      setActivities(data); // 🟢 Now you're updating state properly
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setActivities([]); // optional: clear on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container text-center">
      <ActivityForm onSubmit={handleSuggest} loading={loading} />
      {activities.length > 0 && <ActivityList activities={activities} />}
    </div>
  );
};

export default Home;
