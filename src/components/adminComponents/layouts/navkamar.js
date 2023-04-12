import Form from 'react-bootstrap/Form';
import './navkamar.css'

const Navkamar = () => {
    return (
        <div>
        <nav className='adminNavbar'>
        <img src="./images/logo.png" width={80} className="imgAdmin" />
        <div className='h2Admin'>
        <h2>Kooheng Admin Page</h2>
        </div>
            <h1 className='h1Admin'>Dashboard</h1>
            <ul className='ulNavbar'>
                <li><a href="/adminDasboard"> Dashboard</a></li>
                <li><a href="/adminKamar"> Kamar</a></li>
                <li><a href="/adminReservasi"> History</a></li>
            </ul>
        </nav>
        <div className='h3teks'>
            <h3>Persediaan Kamar</h3>
        </div>
        <div className='pilihan'>
        <Form.Select className='pilih' aria-label="Default select example">
      <option>Varian Kamar</option>
      <option value="1"><a href="">Standart</a></option>
      <option value="2"><a href="">Superior</a></option>
      <option value="3"><a href="">Deluxe</a></option>
    </Form.Select>
        </div>


        </div>
        
    )
}

export default Navkamar