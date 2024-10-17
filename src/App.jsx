import './App.css'
import Header from './Components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import AboutAs from './Pages/AboutAs'
import BecomeAPartner from './Pages/BecomeAPartner'
import Favorite from './Pages/Favorite'
function App() {
  
return (
<>
<div>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<AboutAs/>}/>
  <Route path='/becomeapartner' element={<BecomeAPartner/>}/>
  <Route path='/favorite' element={<Favorite/>}/>
</Routes>
</BrowserRouter>
</div>
</>
  )
}

export default App
