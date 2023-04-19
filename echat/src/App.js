import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles.scss"
import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
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
