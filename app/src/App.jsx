



import Home from './pages/Home'
import Ajouter from './pages/Ajouter'
import Navbar from './composants/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/ajouter' element={<Ajouter/>}/>
    </Routes>
     
    </>
  )
}

export default App
