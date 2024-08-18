import './Home.css';
import bankUsers from '../../assets/data/bankUsers.json';

import { useState, useEffect } from 'react';


function Home() {
    
    const [user, setUser] = useState();

    // const { username, password, name, account_number, balance, transactions, budget, expenses} = storedUser;

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    console.log(user);

    return (
        <div className='home-page'>
            {user ? (
                <h1>Welcome back, {user.name}!</h1>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default Home;