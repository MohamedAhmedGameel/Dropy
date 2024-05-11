import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallary from './pages/Gallary'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/gallary" element={<Gallary />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          {/* <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegistrationForm />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
