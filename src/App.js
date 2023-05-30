import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer';
function App() {
  
 

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: true,
  },
  { id: uuid(),
    nombre:"Christian Velasco",
    puesto: "Head de Alura e instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Devops",
    fav: false,
  },
  { id: uuid(),
    nombre:"Genesys Rondón",
    puesto: "Desarrollarora de software e instructora",
    foto: "https://github.com/genesysaluralatam.png",
    equipo: "Programación",
    fav: false,
  },
  { id: uuid(),
    nombre:"Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "UX y Diseño",
    fav: false,
  },
  { id: uuid(),
    nombre:"Jose Gonzales",
    puesto: "Dev. FullStack",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    equipo: "Data Science",
    fav: false,
  },
  { id: uuid(),
    nombre:"Jhonattan Mercado Senior",
    puesto: "Estudiante en Alura Latam",
    foto: "https://github.com/jemsgreat.png",
    equipo: "Innovación y Gestión",
    fav: false,
  },
  { 
    id: uuid(),
    nombre:"Yina Cardenas Acosta",
    puesto: "Estudiante en Alura Latam",
    foto: "https://scontent.fvup1-1.fna.fbcdn.net/v/t39.30808-6/328930715_506267641579878_1793773059635841357_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RoIh-9O976MAX-GzBbn&_nc_ht=scontent.fvup1-1.fna&oh=00_AfB9-kZtJUCTBlQOvXCeaYuvEdVfNIpFvVrjsFSRHjo3Aw&oe=6471800D",
    equipo: "Móvil",
    fav: false,
  },
  {  
    id: uuid(),
    nombre: "Juanito Pepito",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: false,
  },



  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
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
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  //ternario --> condicion ? seMestra : noSeMuestra
  //condicion && seMuestra   // este es otro modo en vez del ternario hay que estudiar

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador 

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //Spread operator (...any) se usa para copiar aqui el objeto colaboradores
    actualizarColaboradores([...colaboradores, colaborador])
  }

  /* eliminar colaborador */
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  /* actualizar color de equipo */
  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo 
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //like logic
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
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
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }                        {/*este es otro un modo */}
      <MiOrg cambiarMostrar={cambiarMostrar} />  {/*aqui agregamos el nuevo componente MiOrg*/}   
      {
        /* equipos.map( (equipo) => {                           puede ser asi
          return <Equipo datos={equipo} key={equipo.titulo} />
        }) */
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }  

      <Footer />
    </div>
  );
}

export default App;
