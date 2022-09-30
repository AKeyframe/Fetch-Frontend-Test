import '../App.scss'
import './css/main.scss'
import { useState } from 'react'

import TextInput from '../components/TextInput';
import PassInput from '../components/PassInput';
import DropInput from '../components/DropInput';

import { getOccAndStates, submitCompletedForm } from '../services/apiServices';

// import { Link } from "react-router-dom";

export default function Main(props){
    
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
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function checkForm(){
        //Check the form for errors

        handleSubmit()
    }

    function handleSubmit(){
        //Submit the form via post request in services
    }

    return(
        <main>
            <form onSubmit={checkForm}>
            <img src='fetch-frontend-test.png' 
                 alt='Fetch Frontend Test' 
                 width='360px' height= '110px'/>

            <div className="form">
                <TextInput  DisplayName='Email'
                            formName='email'
                            form={form}
                            handleChange= {handleChange}/>

                <PassInput  DisplayName='Password'
                            formName='pw'
                            pw="true"
                            form={form}
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

            </div>
        </main>
    )


}