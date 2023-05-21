import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //ternario --> condicion ? seMestra : noSeMuestra
  //condicion && seMuestra   // este es otro modo en vez del ternario hay que estudiar

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

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
      {/*{mostrarFormulario === true ? <Formulario /> : <div></div>}*/}  {/*este es un modo */}
      {mostrarFormulario && <Formulario />}                        {/*este es otro un modo */}
      <MiOrg cambiarMostrar={cambiarMostrar} />  {/*aqui agregamos el nuevo componente MiOrg*/}   
    </div>
  );
}

export default App;
