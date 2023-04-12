import React from 'react'
import ReservasiTable from '../mainAdmin/mainReservasi'
import NavbarAdmin from '../layouts/navbarAdmin'
import "./style/reservasiSection.css"

function ReservasiSection() {
  return (
    <div className='reservasiContent'>
        <NavbarAdmin />
        <ReservasiTable />
    </div>
  )
}



export default ReservasiSection;
