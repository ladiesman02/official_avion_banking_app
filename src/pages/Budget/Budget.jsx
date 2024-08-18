import './Budget.css';
import bankUsers from '../../assets/data/bankUsers.json';

const currentUser = "root";
const { username, password, name, balance} = bankUsers;



function Budget() {
    return (
        <div className='budget-page'>
            <div className="budget-title">Welcome to your Budget Assistant!</div>
            <div className='budget-and-expenses-container'>
                <div className='budget-setter'>
                    <div className='budget-main-text'>Budget</div>
                    <div className='budget-main-value'>PHP {balance}</div>
                </div>
                <div className='expenses-table'>
                    <div className='budget-main-text'>Expenses</div>
                </div>
            </div>
        </div>
    )   
}

export default Budget;