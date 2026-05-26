import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home.jsx'
import CreateNote from './pages/CreateNote.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'

function App() {

  return (
    <div data-theme="forest">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreateNote/>} />
          <Route path='/note/:id' element={<NoteDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App
