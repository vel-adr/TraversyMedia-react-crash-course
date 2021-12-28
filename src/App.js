import Header from "./components/Header";
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "text 1",
      day: "28 Des",
      reminder: false
    },
    {
      id: 2,
      text: "text 2",
      day: "29 Des",
      reminder: true
    },
    {
      id: 3,
      text: "text 3",
      day: "1 Jan",
      reminder: true
    },
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Task reminder toggle
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Add task form toggle
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="container">
      <Header onShow={toggleForm} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No task to show"}
    </div>
  );
}

export default App;
