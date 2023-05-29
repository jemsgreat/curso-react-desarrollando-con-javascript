import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>  {  /*puede ser asi "e" o en vez de e usar evento o event*/
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }   
        registrarColaborador(datosAEnviar) 
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre}
            actualizarValor={actualizarNombre}
            />
            <CampoTexto titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            {/*<Boton text="Crear"/>   // puede ser asi con el propstext, o de la siguiente forma */}
            
            <Boton>
                Crear
            </Boton>     {/* aqui podemos utilizar como children en props*/}
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo}
            actualizarValor={actualizarTitulo}
            />
            <CampoTexto titulo="Color" 
            placeholder="Ingresar color en Hex" 
            required
            valor={color}
            actualizarValor={actualizarColor}
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
        

    </section>
}

export default Formulario