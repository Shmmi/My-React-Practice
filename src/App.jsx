import Movieparent from "./Components/Movieparent"
import Number from "./Components/Increment.jsx"
import Products from "./Components/Products.jsx"
import Header from "./Components/Header.jsx"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Contextparent from "./Components/Contextparent.jsx"
import Useref from "./Components/Useref.jsx"
import UseReducer from "./Components/UseReducer.jsx"
import Loaders from "./Components/Loaders.jsx"


function App() {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <Routes>
      <Route path="/inc" element={<Number/>}/>
      <Route path="/movies" element={<Movieparent/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/context" element={<Contextparent/>}/>
      <Route path="/ref" element={<Useref/>}/>
      <Route path="/red" element={<UseReducer/>}/>
      <Route path="/loader" element={<Loaders/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
