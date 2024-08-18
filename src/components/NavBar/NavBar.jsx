import './NavBar.css';
import bankLogo from '../../assets/digital_assets/bank_loyaute_cropped.png';

import Home from '../../pages/Home/Home';
import Transactions from '../../pages/Transactions/Transactions';
import Budget from '../../pages/Budget/Budget';

import { useNavigate } from 'react-router-dom';


function NavBar() {

    const navigate = useNavigate();
    
    return (
        <div className='navBar'>
            <div className='bankLogo'>
                <img src={bankLogo} alt='bank-logo'></img>
            </div>
            <div className='navSpacer'></div>
            <div className='navItem'>Login</div>
            <div className='navSpacer'></div>
            <div className='navItem' onClick={() => navigate('/home')}>Home</div>
            <div className='navItem' onClick={() => navigate('/transactions')}>Transactions</div>
            <div className='navItem' onClick={() => navigate('/budget')}>Budget</div>
            <div className='navItem'>About</div>
        </div>
    )
}

export default NavBar;