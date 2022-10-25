import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'

interface NewTaskProps {
  onAddNewTask: (content: string) => void
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [title, setTitle] = useState('')


  function handleAddNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault()
    onAddNewTask(title)
    setTitle('')
  }

  return (
    <div className={styles.inputBar}>
      <form onSubmit={handleSubmitNewTask}>
        <input
          type="text"
          name='title'
          value={title}
          onChange={handleAddNewTask}
          placeholder='Adicione uma nova tarefa'
          required
        />
        <button
          type="submit">
          Criar
          <PlusCircle
            weight='bold'
            size={16} />
        </button>
      </form>
    </div>
  )
}