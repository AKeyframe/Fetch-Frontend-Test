import '../App.scss'
import './css/main.scss'
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

//components
import TextInput from '../components/TextInput';
import PassInput from '../components/PassInput';
import DropInput from '../components/DropInput';
import SignupButton from '../components/SignupButton';

//Services
import { getOccAndStates, submitCompletedForm } from '../services/apiServices';


export default function Main(props){
    
    const [validPass, setValidPass] = useState(false);
    const [passErrors, setPassErrors] = useState([]);
    const [validForm, setValidForm] = useState(false);
    
    const [form, setForm] = useState({
        email: '',
        pw: '',
        pwc: '',
        fullName: '',
        state: '0',
        occupation: '0'
    });

    //Temp
    const [options, setOptions] = useState({
        occupations: [],
        states: []
    });

    useEffect(() => {
        async function updateDropdowns(){
            const data = await getOccAndStates();
            setOptions(
                {occupations: [...data.occupations], 
                 states:[...data.states]});
        }

        updateDropdowns()
    }, []);

    useEffect(() => {
        checkForm();
    }, [form])

    
    function handleChange(e){
        if(e.target.name === 'pw' || e.target.name === 'pwc'){
            handlePassword(e);
        }

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
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
    }//handlePassword()



    function checkForm(){
        if(form.occupation !== '0' && form.state !== '0'){
            if(validPass){
                if(form.email !==''){ //Email validation in handleSubmit()
                    if(form.fullName !== ''){
                        setValidForm(true);
                    }
                }
            }
        }
    }//checkForm()

    function handleSubmit(e){
        e.preventDefault(); 
        //Add email validation code

        const submission = {name: form.fullName,
                            email: form.email,
                            password: form.pw,
                            occupation: form.occupation,
                            state: form.state
        }

        console.log(submission);
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
    )// return
}// main()