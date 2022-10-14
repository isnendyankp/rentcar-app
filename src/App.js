import '../src/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from '../src/components/landpage.jsx';
import Searching from '../src/components/searchingpage.jsx';
import Searchres from '../src/components/searchresult.jsx';
import Rentpackage from '../src/components/rentpackage.jsx';

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
