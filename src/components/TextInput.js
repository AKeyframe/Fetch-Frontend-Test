
import './compCSS.scss'



export default function TextInput(props){

    function emailErrors(){
        if(props.errorInEmail){
            return(
                <div className= 'errors'>
                    <div className= 'emailErrors'>
                        <p>Invalid Email</p>
                    </div>
                </div>
            )
        }
            
    }

        return(
            <div className='TextInput'>
                <label> {props.DisplayName}:
                    <input  className={`
                            ${props.errorInEmail === true ? 'emailError' : ''}`}
                    
                            type= {props.email==='true' ? 'email' :'text'} 
                            placeholder={props.DisplayName} 
                            name={props.formName}
                            value={props.form[props.formName]} 
                            onChange={props.handleChange} 
                    />
    
                </label>

                {emailErrors()}
            </div>
        );

}