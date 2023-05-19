import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <div>
      {/*forma 1 de llamar componente o funcion
      {Header()}
      forma 2 de llamar componente o funcion
      <Header></Header>
      //forma 3 de llamar componente o funcion*/}
      <Header />
      {/* comentado o quitado para limpiar el Ap no lo necesitamos
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo con la React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
    </header>*/}
      <Formulario />    
    </div>
  );
}

export default App;
