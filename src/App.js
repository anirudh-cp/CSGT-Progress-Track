import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";

import Home from "./components/home/Home";
import NoPage from "./components/common/NoPage";

import AdminHome from "./components/admin/AdminHome";
import FacultyHome from "./components/faculty/FacultyHome";
import DirHome from "./components/director/DirHome";

import JournalForm from "./components/forms/JournalForm";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/admin" element={<AdminHome />}></Route>
          <Route exact path="/faculty" element={<FacultyHome />}></Route>
          <Route exact path="/director" element={<DirHome />}></Route>
          {/* <Route exact path='/forms' element={<JournalForm />}></Route> */}
          {/* <Route path="*" element={<NoPage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
