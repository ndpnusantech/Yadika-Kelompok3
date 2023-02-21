import './style/mainLogin.css'

const MainLogin = () => {
    return(
        <div className="Login">
            <center>
                <div className="container">
                    <div className="head">
                        <h1>Kooheng</h1>
                    </div>
                <div className="input-login">
                <h1>Login</h1>
                <input type="text" name="Login" id="login" placeholder="Masukan username anda" /><br /><br /><br />
                <input type="password" name="passwords" id="password" placeholder="Masukan password anda" /><br /><br />
                <a href="/"><button id='masuk'>Login</button><br /><br /></a>
                <a href="/register" id='register'>Tidak punya akun? Daftar disini</a>
                </div>
                </div>
            </center>
        </div>
    )
}

export default MainLogin