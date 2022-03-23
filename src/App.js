
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage';
import DidYouKnow from './Pages/DidYouKnow';
function App() {
  return (
    <Router>
      <nav style={{margin:"10px 10px"}}>
        <Link to="/"   style={{margin:"10px 10px"}}>Home</Link>
        <Link to="/about" style={{margin:"10px 10px"}}>About me</Link>
        <Link to="/Contact" style={{margin:"10px 10px"}}>Contact</Link>
        <Link to="/didyouknow" style={{margin:"10px 10px"}}>Did You Know</Link>


      </nav>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/didyouknow' element={<DidYouKnow/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}
export default App;
