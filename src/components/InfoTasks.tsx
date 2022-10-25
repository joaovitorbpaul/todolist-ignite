import styles from './InfoTasks.module.css'

interface InfoTaskProps {
  checkedList: boolean[]
}

export function InfoTasks({ checkedList }: InfoTaskProps) {
  return (
    <div className={styles.infoTasks}>
      <strong className={styles.createdTasks}>Tarefas criadas <span>{checkedList.length}</span></strong>
      <strong className={styles.status}>Concluídas <span>{checkedList.filter(checked => checked).length} de {checkedList.length}</span></strong>
    </div>
  )
}