import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import MainPage from './pages/mainPage'
import BooksPage from './pages/booksPage'
import BookPage from './pages/bookPage'



function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
