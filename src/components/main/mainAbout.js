import './style/mainAbout.css'
const MainAbout = () => {
    return(
        <div className="about">
            <h1 className='judul'>About</h1>
            <h3 className='pengertian'> <span>Hotel</span> adalah sebuah bangunan, <br /> atau perusahaan yang akan <br /> menyediakan sebuah jasa. <br />  Umumnya jasa yang di tawarkan <br /> oleh hotel berupa penginapan. <br /> Akan tetapi, masih banyak lagi <br /> jasa yang bisa di tawarkan oleh <br /> suatu hotel</h3>
            <img src="./images/hotel2.png" width={500} alt='.' className='hotel2'/>
        </div>
    )
}

export default MainAbout