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
        //Check if the pass is valid
        //Check to make sure the user didn't use the confirm pass field first
        if(e.target.name === 'pw'){
            if(e.target.value !== '' && (e.target.value === form.pwc)){
                setValidPass(true);

            } else if(validPass === true) setValidPass(false);

        } else if(e.target.name === 'pwc'){
            if(e.target.value !=='' && (e.target.value === form.pw)){
                setValidPass(true);

            } else if(validPass === true) setValidPass(false);  
        } 


        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

        checkForm(e)
    }

    function checkForm(e){
        
        //Check the form for errors

        console.log(validPass);
        console.log('Pass: '+form.pw)
        console.log('Conf: '+form.pwc)
        console.log('Target: '+e.target.value)
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