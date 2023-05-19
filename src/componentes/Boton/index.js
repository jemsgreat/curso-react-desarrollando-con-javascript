import "./Boton.css"

const Boton = (props) => {
    {/*return <button className="boton">{props.texto}</button>*/}  /*puede ser asi */
    return <button className="boton">{props.children}</button>     /* o puede ser asi en este caso sera asi porque en formulario.js crear aparece como children en la consola y al colocar el .children lo reconoce y aplica en la app */
}

export default Boton