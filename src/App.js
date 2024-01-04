import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';




function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
