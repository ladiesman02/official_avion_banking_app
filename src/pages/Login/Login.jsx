import './Login.css'
import bankLogo from '/Users/shembernardino/Documents/Avion School/Github/official-banking-app/avion-banking-app/src/assets/bank_loyaute_cropped.png'

function Login() {
    return (
        <div className='loginPage'>
            <div className='loginWindow'>
                <div className='loginBankLogo'>
                    <img src={bankLogo} alt='bank-logo'></img>
                </div>
                <div className='loginText'>Welcome!</div>
                <form name='loginForm'>
                    <label className='userName' name='userName'></label>
                    <input type='text' className='userName' name='userName' placeholder='Username'></input>
                    <br></br>
                    <label className='passWord' name='passWord'></label>
                    <input type='text' className='passWord' name='passWord' placeholder='Password'></input>
                    <br></br>
                    <button className='loginBtn' name='Login'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;