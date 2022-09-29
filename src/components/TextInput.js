
import './compCSS.scss'



export default function TextInput(props){

    return(
        <div className="TextInput">
            <p>{props.DisplayName}: </p>
            <input  type='text' 
                    placeholder={props.DisplayName} 
                    name={props.formName}
                    value={props.form[props.formName]} 
                    onChange={props.handleChange} 
            />
        </div>
    );

}