import './App.css';

import MyLinks from './component/MyLinks.jsx';
import MyRoute from './component/MyRoute.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <MyLinks />  {/* Navigation Links */}
      <MyRoute />  {/* Routes */}
    </div>
    </Router>
  );
}

export default App;
