
import './LForm.css';
import logo from './../../assets/logo.png';
import TextField from '../TextField';
import Button from '../Button';
//import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticatedApp } from './../../component/AuthenticatedApp';
import { UnauthenticatedApp } from './../../component/UnauthenticatedApp';
import { useAuth } from './../../hooks/useAuth';


const LForm = (props) => {
 // const navigate = useNavigate();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [domain, setDomain] = useState('')

  const onSave = async (event) => {
    event.preventDefault()
}

const { user } = useAuth();

  return (
    <div className="container">
        
      <form>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>&Chat</h1>

        <TextField
          required={true}
          placeholder="Usuário"
          value={name}
          onChange={value => setName(value)}
        />
       
        <TextField className="pwd"
          required={true}
          placeholder="Senha"
          value={password}
          onChange={value => setPassword(value)}
        />

        <TextField
          required={true}
          placeholder="Domínio"
          value={domain}
          onChange={value => setDomain(value)}
        />

        <Button> Entrar </Button>

        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      
      </form>
      
    </div>
  );
}

export default LForm;
