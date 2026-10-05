import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(["Learn React", "Practice Props", "Build a Project"])
  const [newTask, setNewTask] = useState('')
  return (
    <>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (<li key={task}>{task}</li>))}
      </ul>
      <input
        value={newTask}
        placeholder='Add new task'
        onChange={(e) => setNewTask(e.target.value)}
        id='taskInput'
      ></input>
      <div>
        <button
          onClick={() => {if(newTask.trim() !== ''){setTasks([...tasks, newTask])
            setNewTask('')}
            }
          }> Add Task
        </button>
      </div>
    </>
  )



}

export default App  