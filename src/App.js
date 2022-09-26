import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Landingpage from './landpage';
import Searching from './searchingpage';

function App() {
  
    return (  
      <Router>
      <Routes>
          <Route path='/' element={<Landingpage />}/>
          <Route exact path='/searching' element={<Searching />}/>
      </Routes>
    </Router>   
    );
  }
  

// class App extends Component 
export default App;
