import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <form>
    <h1> Formulaire </h1>
    <label for="exampleInputName" class="form-label">Nom</label>
    <input type="text" class="form-control"  ></input>
    <label for="exampleInputName" class="form-label">Prénom</label>
    <input type="text" class="form-control" ></input>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
    <button className="btn btn-outline-dark">valider</button>
    </form>
    </div>
  );
}

export default App;
