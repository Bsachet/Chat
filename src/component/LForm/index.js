
import './LForm.css';
import logo from './../../assets/logo.png';
import TextField from '../TextField';
import Button from '../Button';
//import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LForm = (props) => {
 // const navigate = useNavigate();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [domain, setDomain] = useState('')

  const onSave = async (event) => {
    event.preventDefault()
//    const response = await axios.get(
//        ' ', {
//        params: { usuario: name, senha: password }
//    }).catch(function (error) {
//        if (error.response) {
//          alert("Login ou Senha Incorreto(s)")
//          console.log(error.response.data);
//          console.log(error.response.status);
//          console.log(error.response.headers);
//        } else if (error.request) {
//          console.log(error.request);
//        } else {
//          console.log('Erro! ', error.message);
//        }
    
//      });

//    if (response.status == 200) {
     
//       navigate('/home');
//       alert("Sucesso")
       
//   } 

}

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

        <Button><Link to="Home"> Entrar </Link></Button>

      
      </form>
      
    </div>
  );
}

export default LForm;
