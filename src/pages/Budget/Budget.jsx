import './Budget.css';
import { useState } from 'react';


function Budget() {

    const [user, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('user');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
      });

    const { budget, expenses } = user;


    return (
        <div className='budget-page'>
            <div className="budget-title">Welcome to your Budget Assistant!</div>
            <div className='budget-and-expenses-container'>
                <div className='budget-setter'>
                    <div className='budget-main-text'>Budget</div>
                    <div className='budget-main-value'>PHP {user.balance}</div>
                </div>
                <div className='expenses-table'>
                    <div className='budget-main-text'>Expenses</div>
                    <div className='expense-items'>
                        <li>
                            {expenses.expense_amount}
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Budget;