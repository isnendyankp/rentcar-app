import '../src/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from '../src/components/landpage.jsx';
import Searching from '../src/components/searchingpage.jsx';
import Searchres from '../src/components/searchresult.jsx';
import Rentpackage from '../src/components/rentpackage.jsx';
import Signup from './components/signup';
import Signin from './components/signin';
import Payment from './components/payment';
import Confirm from './components/payconfirm';
import Ticket from './components/ticket';

function App() {
  
    return ( 
      <Router>
      <Routes>
          <Route path='/' element={<Landingpage />}/>
          <Route exact path='/selectcar' element={<Searching />}/>
          <Route exact path='/searchresult' element={<Searchres />}/>
          <Route exact path='/rentpackage' element={<Rentpackage />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/signin' element={<Signin />}/>
          <Route exact path='/payment' element={<Payment />}/>
          <Route exact path='/payment/confirm' element={<Confirm />}/>
          <Route exact path='/payment/confirm/ticket' element={<Ticket />}/>
      </Routes>
    </Router> 
    );
  }
  

// class App extends Component 
export default App;
