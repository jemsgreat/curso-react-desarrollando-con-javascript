import { useState } from "react"
import "./CampoTexto.css"
const CampoTexto = (props) => {
    const [valor, actualizarValor] = useState("")
    console.log("Datos: ", props.titulo)
    /* este concepto podemos usarlo para cambiar algo "placeholderModificado"*/
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>  {
        console.log("cambio", e.target.value)    
        props.actualizarValor(e.target.value)
        //e.target.value sera muy utilizar para acceder a lo que se escribe en el input
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio} 
        />
    </div>
}

export default CampoTexto