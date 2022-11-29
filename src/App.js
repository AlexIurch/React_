import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Certificate from './components/Certificate/Certificate'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './components/About/About';


function App() {
  
  return (
    <div className = 'container'>
    
     <Router>
     <Header/>
     <Routes>

       <Route exact path = "/portfolio" element={<Main/>}/> 
       <Route path = "/about" element={<About/>}/>
       <Route exact path = "/projects" element={<Projects/>}/> 
       <Route path = "/contact" element={<Contact/>}/>
       <Route path = "/certificate" element={<Certificate/>}/>

     </Routes>
     <Footer></Footer>
    </Router>

     {/* <Main/>
     <Footer/>  */}
    </div>
  );
}

export default App;
