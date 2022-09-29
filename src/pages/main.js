import '../App.scss'

import { useState } from 'react'
import TextInput from '../components/TextInput'

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


    function handleChange(e){
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <main>
            <div className="forum">
                <TextInput  DisplayName='Email'
                            formName='email'
                            form={form}
                            handleChange= {handleChange}/>

                <TextInput  DisplayName='Password'
                            formName='pw'
                            form={form}
                            handleChange= {handleChange}/>

                <TextInput  DisplayName='Confirm Password'
                            formName='pwc'
                            form={form}
                            handleChange= {handleChange}/>

                <TextInput  DisplayName='Full Name'
                            formName='fullName'
                            form={form}
                            handleChange= {handleChange}/>
                            
            </div>
        </main>
    )


}