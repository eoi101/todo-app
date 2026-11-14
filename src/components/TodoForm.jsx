
import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Yeni görev giriniz..."
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
      >
        Ekle
      </button>
    </form>
  )
}

export default TodoForm
