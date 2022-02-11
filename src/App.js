import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Hero from './Component/Hero'
import { Routes, Route } from 'react-router-dom'
import About from './Component/About'
import Work from './Component/Work'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import items from './data'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/work' element={<Work items={items} />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
