import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //estado - hooks
    //useState  es el metodo para crear el estado
    //useState()  
    console.log(props)
    //const [nombreVavirable,funcionActualiza] = useState(valor inicial)
    //const [nombre, actualizarNombre] = useState('Harland')
    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
    //    console.log('Mostrar/Ocultar elemento', !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg