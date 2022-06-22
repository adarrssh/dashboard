import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import User from './components/pages/user/User'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./components/pages/userLisst/UserList";
import NewUser from "./components/pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>

            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
