import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles.scss"
import { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";


function App() {

const {currentUser} = useContext(AuthContext)
console.log(currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
