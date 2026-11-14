
import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        Henüz görev eklenmedi.
      </p>
    )
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default TodoList
