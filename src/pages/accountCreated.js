import './css/accountCreation.scss';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

export default function AccountCreated(){

    return(
        <main className='accountCreated'>
            {/*With something more complicated I'd create a  
               nav bar compent and have it in App.js, to not reuse code
               With it only being one image I let it be for this */}
            <img src='fetch-frontend-test.png' 
                 alt='Fetch Frontend Test' 
                 width='360px' height= '110px'/>
        
            <h1>Account Created</h1>
            <p>To login, ask the developer to create a backend</p>
            <p>Until then maybe <Link to='/'>create another account?</Link></p>

            <Footer />
        </main>
    )


}