import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo';
function App() {

  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
]

  const [mostrarFormulario, actualizarMostrar] = useState(false)

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
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}                        {/*este es otro un modo */}
      <MiOrg cambiarMostrar={cambiarMostrar} />  {/*aqui agregamos el nuevo componente MiOrg*/}   
      {
        equipos.map( (equipo) => {
          console.log("Equipo", equipo)
          return <Equipo datos={equipo} key={equipo.titulo} />
        })
      }
    </div>
  );
}

export default App;
