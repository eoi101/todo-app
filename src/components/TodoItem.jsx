
import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(todo.title)

  const handleUpdate = () => {
    if (!newTitle.trim()) return

    onUpdate(todo.id, newTitle.trim())
    setEditing(false)
  }

  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm mb-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5"
      />

      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleUpdate()
          }}
          className="flex-1 border rounded px-2 py-1 min-w-0"
        />
      ) : (
        <span className={`flex-1 break-words ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.title}
        </span>
      )}

      {editing ? (
        <>
          <button onClick={handleUpdate} className="text-green-600">
            Kaydet
          </button>
          <button onClick={() => setEditing(false)} className="text-gray-500">
            İptal
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setEditing(true)}
            className="text-blue-600"
          >
            Düzenle
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-600"
          >
            Sil
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
