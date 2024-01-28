import logo from './logo.svg';




import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';


function App() {
  return (
   <>
  <Router>
  <Nav/>
    <Routes>
      <Route>

      </Route>
    </Routes>
    <Footer/>
  </Router>
 


  
   </>
  );
}

export default App;
