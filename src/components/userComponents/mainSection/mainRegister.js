import './style/mainRegister.css'

const MainRegister = () => {
    return(
        <div className="Register">
            <div className="Register-1">
            <center>
                <div className="container-regis">
                    <div className="head-regis">
                        <h1>Kooheng</h1>
                    </div>
                <div className="input-register">
                <h1>Register</h1>
                <input type="text" name="Login" id="login" placeholder="Masukan username anda" /><br /><br />
                <input type="email" name="Email" id="email" placeholder='Masukan email anda' /><br /><br /> 
                <input type="password" name="passwords" id="password" placeholder="Masukan password anda" /><br /><br />
                <a href="/Login"><button id='masuk-regis'>Register</button><br /><br /></a>
                <a href="/login" id='register'>Sudah punya akun? Login disni</a>
                </div>
                </div>
            </center>
        </div>
        </div>
    )
}

export default MainRegister