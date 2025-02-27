import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import EmptyState from './components/EmptyState';
import { useTodos } from './hooks/useTodos';
import { Trash2 } from 'lucide-react';

type FilterType = 'all' | 'active' | 'completed';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Sort todos by creation date (newest first)
  const sortedTodos = [...filteredTodos].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  const todoCount = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <Header />
        
        <TodoForm onAdd={addTodo} />
        
        {todos.length > 0 ? (
          <>
            <TodoFilter 
              filter={filter} 
              onFilterChange={setFilter} 
              todoCount={todoCount}
            />
            
            <TodoList
              todos={sortedTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
            
            {todoCount.completed > 0 && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={clearCompleted}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={14} />
                  <span>Clear completed</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <EmptyState />
        )}
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>TaskMaster © {new Date().getFullYear()} • Your tasks are saved locally</p>
      </footer>
    </div>
  );
}

export default App;
