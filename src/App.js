import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectDemo from "./components/ProjectDemo";
import Skills from "./components/Skills";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdemo" element={<ProjectDemo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
