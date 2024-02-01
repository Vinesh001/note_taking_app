import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import InitialPage from './pages/InitialPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
