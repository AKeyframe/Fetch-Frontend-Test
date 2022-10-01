
import './compCSS.scss'



export default function TextInput(props){

        return(
            <div className="TextInput">
                <label> {props.DisplayName}:
                    <input  type= {props.email==='true' ? 'email' :'text'} 
                            placeholder={props.DisplayName} 
                            name={props.formName}
                            value={props.form[props.formName]} 
                            onChange={props.handleChange} 
                    />
    
                </label>
            </div>
        );

}