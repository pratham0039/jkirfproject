import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import Pratham from './components/pratham';
import Routess from './Routes';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Paramain from './components/paramain';
import Document from './components/document';
import Rankings from './components/rankings';
import Faq from './components/faq';
import Notification from './components/notification';


function App() {
  return (
  <Router>
   
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/paramain" element={<Paramain/>}/>
        <Route exact path="/document" element={<Document/>}/>
        <Route exact path="/ranking" element={<Rankings/>}/>
        <Route exact path="/faq" element={<Faq/>}/>
        <Route exact path="/notification" element={<Notification/>}/>
        
      </Routes>
    
  </Router>
  )
  
  
    
    
  
}

export default App;
