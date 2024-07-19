import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
