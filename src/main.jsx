import { createRoot } from 'react-dom/client'
import './index.css'
import 'sweetalert2/dist/sweetalert2.js'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Services from './Components/Home/Services.jsx'
import ErrorPage from './Components/Home/ErrorPage/ErrorPage.jsx'
import OurArticles from './Components/Home/OurArticles.jsx'
import Pricing from './Components/Home/Pricing.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Components/Context/AuthContext.jsx'
import PrivateRoutes from './Components/routes/PrivateRoutes.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/blogs" element={<OurArticles></OurArticles>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/contact" element={<div>check your plan</div>} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard></Dashboard>
              </PrivateRoutes>
            }
          />
        </Route>
        {/**Error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
)
