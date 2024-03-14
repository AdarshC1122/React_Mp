
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='dash' Component={Dashboard}/>
        <Route path='his' Component={History}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
