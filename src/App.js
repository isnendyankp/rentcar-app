import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './landpage';
import Searching from './searchingpage';
import Searchres from './searchresult';
import Rentpackage from './rentpackage';

function App() {
  
    return ( 
      <Router>
      <Routes>
          <Route path='/' element={<Landingpage />}/>
          <Route exact path='/selectcar' element={<Searching />}/>
          <Route exact path='/searchresult' element={<Searchres />}/>
          <Route exact path='/rentpackage' element={<Rentpackage />}/>
      </Routes>
    </Router> 
    );
  }
  

// class App extends Component 
export default App;
