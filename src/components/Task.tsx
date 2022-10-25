import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  task: ITask;
  deleteTask: (id: string) => void
  updateTask: (task: ITask) => void
}

export interface ITask {
  id: string;
  content: string;
  isComplete: boolean;
}

export function Task({ task, updateTask, deleteTask }: TaskProps) {

  function handleToggleTaskIsComplete() {
    task.isComplete = !task.isComplete
    updateTask(task)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.todo}>
      <button
        className={styles.checkButton}
        onClick={handleToggleTaskIsComplete}>
        {
          task.isComplete ?
            <CheckCircle
              className={styles.checkCircleIcon}
              weight='bold' /> :
            <Circle
              className={styles.circleIcon}
              weight='bold' />
        }
      </button>
      <p className={task.isComplete ? styles.isComplete : ''}>{task.content}</p>
      <button
        className={styles.trash}
        onClick={handleDeleteTask} >
        <Trash
          size={18}
        />
      </button>
    </div>
  )
}