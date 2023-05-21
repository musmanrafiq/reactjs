import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to="/buttons">Buttons Examples </Link>
      <Link to="/inputs">Inputs Examples</Link>
    </div>
  );
}

export default Dashboard;
