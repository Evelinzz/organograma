import './CampoTexto.css'

const CampoTexto = (props) => {
    
    return (
        <div className="campo-texto">
            <label>
                {props.label} 
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/> 
        </div>
    )
}
export default CampoTexto
 
//*com esta propriedade (props) é possivel alterar o nome das labels em lugares distintos usando {}
//passando ela como parametro em app.js é possível o que se necessita em varios campos;