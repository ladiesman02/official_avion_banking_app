import './NavBar.css';
import bankLogo from '/Users/shembernardino/Documents/Avion School/Github/official-banking-app/avion-banking-app/src/assets/digital_assets/bank_loyaute_cropped.png'

function NavBar() {
    return (
        <div className='navBar'>
            <div className='bankLogo'>
                <img src={bankLogo} alt='bank-logo'></img>
            </div>
            <div className='navSpacer'></div>
            <div className='navItem'>Login</div>
            <div className='navSpacer'></div>
            <div className='navItem'>Home</div>
            <div className='navItem'>Transactions</div>
            <div className='navItem'>Budget</div>
            <div className='navItem'>About</div>
        </div>
    )
}

export default NavBar;