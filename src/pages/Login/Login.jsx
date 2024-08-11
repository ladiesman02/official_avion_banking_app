import './Login.css'
import bankLogo from '/Users/shembernardino/Documents/Avion School/Github/official-banking-app/avion-banking-app/src/assets/bank_loyaute_cropped.png'

function Login() {
    return (
        <div className='loginPage'>
            <div className='loginWindow'>
                <div className='bankLogo'>
                    <img src={bankLogo} alt='bank-logo'></img>
                </div>
                <div>Welcome!</div>
                <form name='loginForm'>
                    <label className='userName' name='userName'></label>
                    <br></br>
                    <input type='text' className='userName' name='userName' placeholder='Enter username'></input>
                    <br></br>
                    <label className='passWord' name='passWord'></label>
                    <br></br>
                    <input type='text' className='passWord' name='passWord' placeholder='Enter password'></input>
                </form>
            </div>
        </div>
    )
}

export default Login;