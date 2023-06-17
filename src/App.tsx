import Home from './pages/Home'
import ListTasks from './pages/ListTasks'
import TaskItem from './pages/TaskItem'
import NotFound from './pages/NotFound'
import Navbar from './component/Navbar'
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/list-tasks' element={<ListTasks />}/>
      <Route path='/task-item' element={<TaskItem />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
