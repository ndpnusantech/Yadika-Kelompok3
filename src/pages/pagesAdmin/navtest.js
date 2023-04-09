import React from 'react'

function Navtest() {
  return (
    <div>
        <ul class="nav nav-tabs">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-bars"></i></a>
      <div class="dropdown-menu ">
        <a class="dropdown-item mt-5 mb-5" href="#">Home</a>
        <a class="dropdown-item mt-5 mb-5" href="#">Ticket</a>
        <a class="dropdown-item mt-5 " href="#">Account</a>
        </div>
    </li>
    </ul>
    </div>
  )
}

export default Navtest