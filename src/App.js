import './App.css';
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Chat from "./pages/ChatRoom/ChatRoom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';

//import {useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';

//firebase.initializeApp({

//})

//const auth = firebase.auth();
//const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
