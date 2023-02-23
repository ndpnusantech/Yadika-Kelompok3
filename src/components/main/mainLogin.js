import './style/mainLogin.css'

const MainLogin = () => {
    return(
        <div className="Login">
            <div className="login-1">
            <center>
                <div className="container-regis">
                    <div className="head-regis">
                        <h1>Kooheng</h1>
                    </div>
                <div className="input-login">
                <h1>Login</h1>
                <input type="text" name="Login" id="login" placeholder="Masukan username anda" /><br /><br />
                <input type="password" name="passwords" id="password" placeholder="Masukan password anda" /><br /><br />
                <a href="/"><button id='masuk-login'>Login</button><br /><br /></a>
                <a href="/register" id='register'>Belum punya akun? daftar disni</a>
                </div>
                </div>
            </center>
        </div>
        </div>
    )
}

export default MainLogin