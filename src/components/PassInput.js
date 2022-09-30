


export default function PassImport(props){
    return(
        <div className="TextInput">
            <label> {props.DisplayName}:
                <input  type='password'
                        placeholder={props.DisplayName} 
                        name={props.formName}
                        value={props.form[props.formName]} 
                        onChange={props.handleChange} 
                />
            </label>

            <label id='pwc'> {"Confirm "+props.DisplayName}:
                <input  type='password'
                        placeholder={"Confirm "+props.DisplayName} 
                        name={props.formName+'c'}
                        value={props.form[props.formName+'c']} 
                        onChange={props.handleChange} 
                />
            </label>
        </div>
    );
}