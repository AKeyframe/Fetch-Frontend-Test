


export default function DropInput(props){
    
    return(
        <div className='DropInput'>
            <label> {props.DisplayName}:
                <select name={props.formName}
                        value={props.form[props.formName]}
                        onChange={props.handleChange}>

                    <option value='0'>{props.placeholder}</option>
                    {props.options.map((opt, i) => (
                        <option 
                            key={i}
                            value={props.formName === 'state' ? opt.name : opt}
                        >    
                            {props.formName === 'state' ? opt.name : opt
                        }</option>
                    ))}
                </select>
            </label>
        </div>
    );
}