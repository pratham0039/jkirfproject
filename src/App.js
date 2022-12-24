import logo from './logo.svg';
import './App.css';
import Navigation from './components/homepage/navigation'
import Pratham from './components/pratham';
import Routess from './Routes';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
   
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        
      </Routes>
    
  </Router>
  )
  
  
    
    
  
}

export default App;
