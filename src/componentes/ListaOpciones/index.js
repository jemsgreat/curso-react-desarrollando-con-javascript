import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> areglo.map( (equipo, index) => {
    //    return <option></option>
    //} )

   /*  const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ] */

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/*tambien puede hacerce de la siguiente forma
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)} */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}  
        </select>
    </div>
} 

export default ListaOpciones