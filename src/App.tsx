import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { InfoTasks } from './components/InfoTasks'
import { NewTask } from './components/NewTask'
import { ITask, Task } from './components/Task'

import { v4 as uuidv4 } from 'uuid'

const tasksList: ITask[] = [
  {
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true
  },
  {
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true
  },
  {
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  }
]

function App() {

  const [tasks, setTasks] = useState(tasksList)

  function addNewTask(content: string) {
    const newTask = {
      id: uuidv4(),
      content,
      isComplete: false
    }
    setTasks([newTask, ...tasks])
  }

  function updateTask(taskToToggleCheck: ITask) {
    const tasksUpdated = tasks.map(task => task.id === taskToToggleCheck.id ? taskToToggleCheck : task)
    setTasks(tasksUpdated)
  }

  function deleteTask(id: string) {
    const tasksListWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(tasksListWithoutDeletedOne)
  }


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onAddNewTask={addNewTask} />
        <InfoTasks checkedList={tasks.map(task => task.isComplete)} />
        {tasks.map(task => {
          return <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        })}
      </div>
    </>
  )
}

export default App
