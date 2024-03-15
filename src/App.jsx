import Movieparent from "./Components/Movieparent"
import Number from "./Components/Increment.jsx"
import Products from "./Components/Products.jsx"
import Header from "./Components/Header.jsx"
import {BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <BrowserRouter>
    <>
    <Header/>
    <Routes>
      <Route path="/inc" element={<Number/>}/>
      <Route path="/movies" element={<Movieparent/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
