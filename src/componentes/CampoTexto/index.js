import "./CampoTexto.css"
const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo)
    /* este concepto podemos usarlo para cambiar algo "placeholderModificado"*/
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} />
    </div>
}

export default CampoTexto