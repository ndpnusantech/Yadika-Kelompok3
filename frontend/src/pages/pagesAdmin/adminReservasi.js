import React from 'react'
import "./style/adminReservasi.css"
import NavbarAdmin from '../../components/adminComponents/layouts/navbarAdmin';
import MainReservasi from '../../components/adminComponents/mainAdmin/mainReservasi';

const AdminReservasi = () => {
  return (
    <div className='reservasiContent'>
        <NavbarAdmin />
        <MainReservasi />
    </div>
  )
}



export default AdminReservasi;
