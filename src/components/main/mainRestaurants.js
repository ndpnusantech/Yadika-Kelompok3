import './style/mainRestaurants.css'


const MainRestaurants = () => {
    return(
        <div className="menu">
            <img className='Menu-img' src='./images/hotel1.jpg'/>
            <div className="g">
            <h1 className='icon'><span></span>Food And Drink Menu</h1>
            </div>
            <ul className='p'>
                <li className='p'><img src="./images/jus.jpeg" alt='.' width={300}/></li>
                <p className="food">Jus Rp. 15.000</p>
                <li className='p1'><img src="./images/krab.jpeg" alt='.' width={300}/></li>
                <p className="food2">krabby Patty Rp.  30.000</p>
                <li className='p2'><img src="./images/nasgor.jpeg" alt='.' width={300}/></li>
                <p className="food3">Nasi Goreng Rp. 20.000</p>
            </ul>
        </div>
    )
}

export default MainRestaurants