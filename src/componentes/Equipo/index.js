import Colaborador from "../Colaborador"
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const {colaboradores, eliminarColaborador } = props	
    const obj = {
        backgroundColor: colorSecundario
    }

    console.log(colaboradores.length > 0)
    const estiloTitulo = { borderColor: colorPrimario}

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
            {/*<h3 style={{ borderColor: colorPrimario}} >{titulo}</h3>*/}{/*puedes hacerlo asi */}
                <h3 style={estiloTitulo} >{titulo}</h3>                  {/*o puedes hacerlo asi */}  
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador} 
                        />)
                    }    
                </div>
            </section>
        }
    </>
}

export default Equipo