import './Budget.css';
import bankUsers from '../../assets/data/bankUsers.json';

import { useState, useEffect } from 'react';

const currentUser = "root";


function Budget() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            const { username, password, name, account_number, balance, transactions, budget, expenses} = storedUser;
        }
    }, []);

    return (
        <div className='budget-page'>
            <div className="budget-title">Welcome to your Budget Assistant!</div>
            <div className='budget-and-expenses-container'>
                <div className='budget-setter'>
                    <div className='budget-main-text'>Budget</div>
                    <div className='budget-main-value'>PHP </div>
                </div>
                <div className='expenses-table'>
                    <div className='budget-main-text'>Expenses</div>
                </div>
            </div>
        </div>
    )   
}

export default Budget;