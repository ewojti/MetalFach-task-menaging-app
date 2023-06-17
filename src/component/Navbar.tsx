import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list-tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/task-item">Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
