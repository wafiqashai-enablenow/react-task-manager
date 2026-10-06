import { useState, useRef} from 'react'

function App() {

  const [tasks, setTasks] = useState([{ id: crypto.randomUUID(), text: "Learn React" }, { id: crypto.randomUUID(), text: "Practice Props" }, { id: crypto.randomUUID(), text: "Build a Project" }])
  const [newTask, setNewTask] = useState('')
  const inputRef = useRef(null)
  return (
    <>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (<li key={task.id}>{task.text}</li>))}
      </ul>
      <input
        value={newTask}
        placeholder='Add new task'
        onChange={(e) => setNewTask(e.target.value)}
        id='taskInput'
        ref={inputRef}
      ></input>
      <div>
        <button
          onClick={() => {
            if (newTask.trim() !== '') {
              setTasks([...tasks, { id: crypto.randomUUID(), text: newTask }])
              setNewTask('')
              inputRef.current.focus()

            }
          }
          }> Add Task
        </button>
      </div>
    </>
  )



}

export default App  