import { useState } from "react";



export default function PassImport(props){
    
    function checkClass(){
        if(props.validPass){
            return 'validInput';

        } else if((props.form.pw !== '' && props.form.pwc === '') || 
                  (props.form.pw === '' && props.form.pwc === '')) {
            return 'defInput';

        } else {
            return 'badInput';
        }
    }

   
    return(
        <div className="TextInput">
            <label> {props.DisplayName}:
                <input  className={checkClass()}
                        type='password'
                        placeholder={props.DisplayName} 
                        name={props.formName}
                        value={props.form[props.formName]} 
                        onChange={props.handleChange}

                        
                />
            </label>

            <label id='pwc'> {"Confirm "+props.DisplayName}:
                <input  className={checkClass()}
                        type='password'
                        placeholder={"Confirm "+props.DisplayName} 
                        name={props.formName+'c'}
                        value={props.form[props.formName+'c']} 
                        onChange={props.handleChange}                
                />
            </label>
        </div>
    );
}