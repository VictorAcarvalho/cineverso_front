import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './Login.module.css';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import { login } from '../../services/api';
import Swal from 'sweetalert2';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
             await login({email,password})
             navigate("/homePage")
        }catch(e: any ){
            Swal.fire({
                title:'Ops!',
                text: e.message,
                icon: 'error'
            })
        }
        
    };

    return (

        <div>

            <Header />

            <div className={styles.loginContainer}>

                <div className={styles.collumWrapper}>

                    <Title size='giant' text='Login'/>
                
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div >
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button 
                        type='secondary' 
                        size='large' 
                        children="Entrar"
                         />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;