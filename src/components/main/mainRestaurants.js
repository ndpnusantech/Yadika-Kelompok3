import './style/mainRestaurants.css'


const MainRestaurants = () => {
    return(
        <div className="menu">
            <div className="g">
            <h1 className='icon'><span></span>Food And Drink Menu</h1>
            </div>
            <ul className='p'>
                <li className='p'><img src="./image/kamar.jpeg" width={300}/></li>
                <p className="food">Nama Makanan</p>
                <li className='p'><img src="./image/kamar.jpeg" width={300}/></li>
                <p className="food2">Nama Makanan</p>
                <li className='p'><img src="./image/kamar.jpeg" width={300}/></li>
                <p className="food3">Nama Makanan</p>
            </ul>
        </div>
    )
}

export default MainRestaurants