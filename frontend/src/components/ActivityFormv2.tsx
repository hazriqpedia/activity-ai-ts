// src/components/ActivityForm.tsx
import { useState } from "react";
import { fetchSuggestedActivities as suggestActivities } from "../services/api";

const ActivityForm = () => {
  const [minutes, setMinutes] = useState("");
  const [energyLevel, setEnergyLevel] = useState("low");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!minutes) return;
    const result = await suggestActivities(Number(minutes), energyLevel);
    console.log(result);
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <form onSubmit={handleSubmit} className="text-center">
        <h4>
          Suggest me activities within{" "}
          <input
            type="number"
            className="form-control d-inline w-auto mx-2"
            style={{ display: "inline-block", width: "80px" }}
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="minutes"
            required
          />
          minutes.
        </h4>

        <h4 className="mt-4">
          My energy level is{" "}
          <select
            className="form-select d-inline w-auto mx-2"
            style={{ display: "inline-block", width: "120px" }}
            value={energyLevel}
            onChange={(e) => setEnergyLevel(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          .
        </h4>

        <button type="submit" className="btn btn-primary mt-4">
          Suggest
        </button>
      </form>

      <div className="mt-5 text-muted">Made with &lt;3 by Hazriq</div>
    </div>
  );
};

export default ActivityForm;
