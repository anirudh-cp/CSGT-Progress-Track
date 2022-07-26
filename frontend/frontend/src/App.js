import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/common/Header';

import Home from './components/home/Home'
import NoPage from './components/common/NoPage'

import AdminHome from './components/admin/AdminHome'
import FacultyHome from './components/faculty/FacultyHome'
import DirHome from './components/director/DirHome'

import ProfilePage from './components/profile/ProfilePage'
import JournalForm from './components/forms/JournalForm'

import useStore from './API/store'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


function App() {

  const { name } = useStore();

  return (
    <div className="overflow-hidden">

      <Header Name={name} />

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/admin' element={<AdminHome />}></Route>
          <Route exact path='/faculty' element={<FacultyHome />}></Route>
          <Route exact path='/director' element={<DirHome />}></Route>
          <Route exact path='/profile' element={<ProfilePage />}></Route>
          {/* <Route exact path='/forms' element={<JournalForm />}></Route> */}
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
