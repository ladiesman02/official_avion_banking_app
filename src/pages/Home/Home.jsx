import './Home.css';

import { useState } from 'react';


function Home() {
    
    const [user, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('user');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
      });

    return (
        <div className='home-page'>
            {user ? (
                <h1>Welcome back, {user.name}!</h1>
            ) : (
                <h1>Loading...</h1>
            )}

            <div className='account-info'>
                <div className='account-info-main-text'>{user.name}</div>
                <div className='account-info-secondary-text'>{user.account_number}</div>
                <div className='account-info-balance'>PHP {user.balance}</div>
            </div>
        </div>
    )
}

export default Home;