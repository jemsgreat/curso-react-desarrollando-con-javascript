import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (e) =>  {
        e.preventDefault()
        console.log("Manejar el envio", e)    /*puede ser asi o en vez de e usar evento o event*/
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
            <ListaOpciones />
            {/*<Boton text="Crear"/>   // puede ser asi con el propstext, o de la siguiente forma */}
            <Boton>
                Crear
            </Boton>     {/* aqui podemos utilizar como children en props*/}
        </form>

    </section>
}

export default Formulario