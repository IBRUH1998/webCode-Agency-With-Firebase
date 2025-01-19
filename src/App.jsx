import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Home/Navbar'


function App() {
  return (
    <>
      <Navbar></Navbar>

      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      
    </>
  )
}

export default App
