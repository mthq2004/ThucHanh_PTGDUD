import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import Home from './components/Home'
import TodoList from './components/TodoList'
import ToggleTheme from './components/ToggleTheme'
import ShoppingCart from './components/ShoppingCart'
import Auth from './components/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <p>5 ASYNC</p>
        <div className="btnNav">
          <Link to={'/'}>
            <button>Counter App</button>
          </Link>
          <Link to={'/todoList'}>
            <button>To-do List</button>
          </Link>
          <Link to={'/toggleTheme'}>
            <button>Toggle Theme</button>
          </Link>
          <Link to={'/shoppingCart'}>
            <button>Shopping Cart</button>
          </Link>
          <Link to={'/auth'}>
            <button>Auth</button>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todoList' element={<TodoList/>}/>
          <Route path='/toggleTheme' element={<ToggleTheme/>}/>
          <Route path='/shoppingCart' element={<ShoppingCart/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
