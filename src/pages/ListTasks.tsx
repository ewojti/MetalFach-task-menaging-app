import {Link} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import TaskItem from "./TaskItem";

const ListTasks = () => {
  return (
    <>
        <Link to='/task/1'>Task 1</Link>
        <Link to='/task/1'>Task 2</Link>
        <button>New task</button>
        <Routes>
          
        </Routes>
    </>
  );
}

export default ListTasks