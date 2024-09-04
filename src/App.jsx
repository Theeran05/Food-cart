import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Cart } from './components/Cart'
import { createContext, useState } from 'react'

export const Cartcontext = createContext()
function App() {
  const [cart, setcart] = useState([])


  return (
    <>
      <Cartcontext.Provider value={{ cart, setcart }}>
        <BrowserRouter>
          <Header cart={cart} />
          <h1 className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Cart' element={<Cart />} />
            </Routes>
          </h1>
        </BrowserRouter>
      </Cartcontext.Provider>
    </>
  )
}

export default App
