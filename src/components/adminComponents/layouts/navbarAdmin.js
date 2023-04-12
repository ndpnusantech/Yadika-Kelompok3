import './navbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <div>
        <nav className='adminNavbar'>
        <img src="./images/logo.png" width={80} className="imgAdmin" />
        <div className='h2Admin'>
        <h2>Kooheng Admin Page</h2>
        </div>
        <h1 className='h1Admin'>Dashboard</h1>
            <ul className='ulNavbar'>
                <li><a href="/adminDasboard">Dashboard</a></li>
                <li><a href="/adminKamar">Kamar</a></li>
                <li><a href="/adminReservasi">History</a></li>
            </ul>
        </nav>
        </div>
        
    )
}

export default NavbarAdmin