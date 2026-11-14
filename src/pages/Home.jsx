
import { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Home() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // Görevleri LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Görev ekleme
  const addTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }

    setTodos((prev) => [...prev, newTodo])
  }

  // Görev silme
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Görev tamamlama
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  // Görev güncelleme
  const updateTodo = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle }
          : todo
      )
    )
  }

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Görev Yönetim Sistemi
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Günlük görevlerini kolayca yönet.
        </p>

        <TodoForm onAdd={addTodo} />

        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Toplam görev: {todos.length}</span>
          <span>Tamamlanan: {completedCount}</span>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />

      </div>
    </div>
  )
}

export default Home
