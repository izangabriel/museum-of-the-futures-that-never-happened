import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Files from './pages/Files'
import FileDetail from './pages/FileDetail'
import Page404 from './pages/Page404'

function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-mono text-stone-200">
      <header className="border-b border-stone-700 px-4 py-3">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/" className="font-bold tracking-widest text-amber-500">
            ARCHIVO N-4
          </Link>
          <Link to="/archivo" className="hover:text-amber-400">
            Archivo
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/archivo' element={<Files />} />
          <Route path='/archivo/:id' element={<FileDetail />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  )
}

export default App