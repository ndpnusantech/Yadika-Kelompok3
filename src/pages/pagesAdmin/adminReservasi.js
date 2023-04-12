import React from 'react'
import MainReservasi from '../../components/adminComponents/mainAdmin/mainReservasi';
import './style/adminReservasi.css'
import NavbarAdmin from '../../components/adminComponents/layouts/navbarAdmin';

function AdminReservasi() {
  return (
    <div className='adminReservasi'>
        <NavbarAdmin />
        <MainReservasi />
    </div>
  )
}



export default AdminReservasi;
