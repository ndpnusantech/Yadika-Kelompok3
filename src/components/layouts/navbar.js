import './navbar.css'

const Navbar = () => {
    return(
        <>
        <div className="navbar">
            <img src="./image/logo.png" width={40}/>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/restaurants">Restaurant</a></li>
                </ul>
        </div>
        </>
    )
}

export default Navbar