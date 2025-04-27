import { Activity } from "../types/Activity";

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="mt-5">
      <h4 className="text-center mb-4">Suggested Activities:</h4>
      <div className="row">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{activity.title}</h5>
                <p className="card-text">{activity.description}</p>
                <span className="badge bg-secondary">{activity.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
