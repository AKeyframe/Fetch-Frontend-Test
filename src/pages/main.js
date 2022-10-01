import '../App.scss'
import './css/main.scss'
import { useState } from 'react'

//components
import TextInput from '../components/TextInput';
import PassInput from '../components/PassInput';
import DropInput from '../components/DropInput';
import SignupButton from '../components/SignupButton';

import { getOccAndStates, submitCompletedForm } from '../services/apiServices';

// import { Link } from "react-router-dom";

export default function Main(props){
    
    const [validPass, setValidPass] = useState(false);
    const [passErrors, setPassErrors] = useState([]);
    const [validForm, setValidForm] = useState(false);
    


    const [form, setForm] = useState({
        email: '',
        pw: '',
        pwc: '',
        fullName: '',
        state: '',
        occupation: ''
    });

    //Temp
    const [options, setOptions] = useState({
        occupations: [],
        states: []
    })


    function handleChange(e){
        
        if(e.target.name === 'pw' || e.target.name === 'pwc'){
            handlePassword(e);
        }


        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

        checkForm(e)
    }


    function handlePassword(e){

        //Check which password field the user used
        if(e.target.name === 'pw'){
            


            //Check if the pass is valid
            if(e.target.value !== '' && (e.target.value === form.pwc)){
                //Check password requirements
                const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
                const numbers = `1234567890`;
                if( e.target.value.length < 12 || 
                    !specialChars.split('').some(char => {
                        if(e.target.value.includes(char)){
                            return true;
                        } else return false;

                    }) ||
                    !numbers.split('').some(char => {
                        if(e.target.value.includes(char)){
                            return true;
                        } else return false;

                    })){
                        setPassErrors(prev =>([
                            'have 12 or more characters',
                            'have 1 or more numbner',
                            'have 1 or more symbols'
                        ]))
                } else{
                    setValidPass(true);
                    setPassErrors([]);
                }


            } else {
                if(validPass === true){
                    setValidPass(false);
                } else {
                    //Clear errors if empty or confirm field is
                    if((e.target.value === '' && form.pwc === '') ||
                        (e.target.value !== '' && form.pwc === '')){

                        setPassErrors([]);
                    } else{
                        setPassErrors([`match each other`]);
                    }
                    
                }
                
            } 

        } else if(e.target.name === 'pwc'){
            //Clear errors if empty
            

            //Check if the pass is valid
            if(e.target.value !=='' && (e.target.value === form.pw)){
                const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
                const numbers = `1234567890`;
                if( e.target.value.length < 12 || 
                    !specialChars.split('').some(char => {
                        if(e.target.value.includes(char)){
                            return true;
                        } else return false;

                    }) ||
                    !numbers.split('').some(char => {
                        if(e.target.value.includes(char)){
                            return true;
                        } else return false;
                        
                    })){
                        setPassErrors(prev =>([ 
                            'have 12 or more characters',
                            'have 1 or more numbner',
                            'have 1 or more special characters'
                        ]))
                } else{
                    setValidPass(true);
                    setPassErrors([]);
                }

            } else {
                if(validPass === true){
                    setValidPass(false);
                    setPassErrors([`match each other`])
                } else {
                    //Clear errors if empty or pass field isn't
                    if((e.target.value === '' && form.pw === '') ||
                        form.pw !== '' && e.target.value === ''){

                        setPassErrors([]);
                    } else{
                        setPassErrors([`match each other`]);
                    }
                    
                }
                
            } 
        } 
    }



    function checkForm(e){
        console.log('target: '+e.target.name)
        console.log('value: '+e.target.value)
        console.log('formPW: '+form.pw)
        console.log('formPWC: '+form.pwc)

        //Check the form for error
    }

    function handleSubmit(){
        //Submit the form via post request in services
    }

    return(
        <main>
            <img src='fetch-frontend-test.png' 
                 alt='Fetch Frontend Test' 
                 width='360px' height= '110px'/>

            <form onSubmit={handleSubmit}>
                
                <div className="form">
                    <TextInput  DisplayName='Email'
                                formName='email'
                                email='true'
                                form={form}
                                handleChange= {handleChange}/>

                    <PassInput  DisplayName='Password'
                                formName='pw'
                                form={form}
                                validPass={validPass}
                                passErrors={passErrors}
                                handleChange= {handleChange}/>

                    <TextInput  DisplayName='Full Name'
                                formName='fullName'
                                form={form}
                                handleChange= {handleChange}/>

                    <DropInput  DisplayName='State'
                                formName='state'
                                placeholder='Select your State'
                                form={form}
                                options={options.states}
                                handleChange={handleChange} />

                    <DropInput  DisplayName='Occupation' 
                                formName='occupation'
                                placeholder='Select an Occupation'
                                form={form}
                                options={options.occupations}
                                handleChange={handleChange}/>

                    <SignupButton   validForm={validForm}
                                    setValidForm={setValidForm}/>
                </div>
            </form>
        </main>
    )


}