import { useState } from "react";

interface ActivityFormProps {
  onSubmit: (minutes: number, energyLevel: "low" | "medium" | "high") => void;
  loading: boolean;
}

const ActivityForm = ({ onSubmit, loading }: ActivityFormProps) => {
  const [minutes, setMinutes] = useState<number>(30);
  const [energyLevel, setEnergyLevel] = useState<"low" | "medium" | "high">(
    "medium"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!minutes) return;
    onSubmit(minutes, energyLevel);
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div className="mb-4">
        <h2>
          Suggest me activities within{" "}
          <input
            type="number"
            className="form-control d-inline-block text-center"
            style={{ width: "80px" }}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            required
            min={1}
          />{" "}
          minutes.
        </h2>
      </div>

      <div className="mb-4">
        <h4>
          My energy level is{" "}
          <select
            className="form-select d-inline-block text-center"
            style={{ width: "120px" }}
            value={energyLevel}
            onChange={(e) =>
              setEnergyLevel(e.target.value as "low" | "medium" | "high")
            }
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          .
        </h4>
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Loading..." : "Suggest Activities"}
      </button>
    </form>
  );
};

export default ActivityForm;
