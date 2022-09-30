



export default function DropInput(props){
    
    return(
        <div className='DropInput'>
            <label> {props.DisplayName}:
                <select name={props.formName}
                        value={props.form[props.formName]}
                        onChange={props.handleChange}>

                    <option value='0'>{props.placeholder}</option>
                    <option value='1'>We'll get this from a map()</option>
                </select>
            </label>
        </div>
    );
}