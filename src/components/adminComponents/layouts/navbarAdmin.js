import './navbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <>
        <nav className='adminNavbar'>
        <img src="./images/logo.png" width={80} className="imgAdmin" />
        <div className='h2Admin'>
        <h2>Kooheng Admin Page</h2>
        </div>
            <h1 className='h1Admin'>Dashboard</h1>
            <ul className='ulNavbar'>
                <li><a href="">Kamar</a></li>
                <li><a href="">Pembokingan</a></li>
                <li><a href="">Pembokingan</a></li>
                <li><a href="">Pembokingan</a></li>
            </ul>
        </nav>
        </>
    )
}

export default NavbarAdmin