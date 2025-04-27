import { useState } from "react";

interface Props {
  onSubmit: (minutes: number, energyLevel: string) => void;
}

const ENERGY_OPTIONS = ["low", "medium", "high"];

export default function ActivityForm({ onSubmit }: Props) {
  const [minutes, setMinutes] = useState("");
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const min = parseInt(minutes, 10);
    if (!isNaN(min) && selectedEnergy) {
      onSubmit(min, selectedEnergy);
    }
  };

  return (
    <form className="p-4 rounded shadow bg-white" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">How many minutes do you have?</label>
        <input
          type="number"
          className="form-control"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          min={1}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Select your energy level:</label>
        <div className="d-flex gap-2">
          {ENERGY_OPTIONS.map((level) => (
            <button
              key={level}
              type="button"
              className={`btn ${
                selectedEnergy === level ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedEnergy(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-success mt-3"
        disabled={!selectedEnergy}
      >
        Suggest Activities
      </button>
    </form>
  );
}
