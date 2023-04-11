import './App.css';
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import ChatRoom from "./pages/ChatRoom/ChatRoom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {


  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Chat" element={<ChatRoom />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
