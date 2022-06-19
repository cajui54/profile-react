import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import HardSkills from "./components/pages/HardSkills";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='about' element={<AboutMe/>}/>
          <Route path='skill' element={<HardSkills/>}/>
          <Route path='project' element={<Projects/>}/>
          <Route path='contact' element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
