import './navbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <div>
        <nav className='adminNavbar'>
        <img src="./images/logo.png" width={80} className="imgAdmin" />
        <div className='h2Admin'>
        <h2>Kooheng Admin Page</h2>
        </div>
            <ul className='ulNavbar'>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Kamar</a></li>
                <li><a href="">Pembokingan</a></li>
            </ul>
        </nav>
        </div>
        
    )
}

export default NavbarAdmin