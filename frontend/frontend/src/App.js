import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/common/Header';
import Footer from './components/common/Footer'

import Home from './components/home/Home'
import NoPage from './components/common/NoPage'

import AdminHome from './components/admin/AdminHome'
import FacultyHome from './components/faculty/FacultyHome'
import DirHome from './components/director/DirHome'

import Login from "./components/login/Login";

function App() {
  return (
    <div className="overflow-hidden">
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/admin' element={<AdminHome />}></Route>
          <Route exact path='/faculty' element={<FacultyHome />}></Route>
          <Route exact path='/director' element={<DirHome />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
