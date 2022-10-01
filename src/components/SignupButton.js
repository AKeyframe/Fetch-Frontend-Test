import './compCSS.scss'


export default function SignupButton(props){

    return(
        <button disabled={!props.validForm}>Sign Up</button>
    )
    
   
}