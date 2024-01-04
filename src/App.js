import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Contact from './components/Contact';




function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
