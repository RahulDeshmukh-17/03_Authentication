import Register from './Register'
import Login from './Login'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
