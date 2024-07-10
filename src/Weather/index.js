import './index.css'
const Landing=()=>{
    return(
        <form>
           <div className="topnav">
            <h3>Susan</h3>
            <div className="navbar">
            <input placeholder="Enter city name"/>
            <img src="/images/search-icon.png" alt="search" className="search-icon" />
            </div>
            <img src="images/harmburger-menu.png" className="harmburger-menu"/>
            </div>
            <img src="images/weather-image.jpeg" className="weather-pic"/>
            <br>
            </br>
            <br>
            </br>

            <div className='weather-principles'>

                <div className='humidity-sunset'>
                    <div className='humidity'>
                        <div>
                        <img src = "images/humidity-icon.png" className='humidity-image'/>
                        </div>
                        <div className='humidity-stats'>
                            <p>Humidity</p>
                            <p>39%</p>   
                        </div>
                    </div>

                    <div className='sunset'>
                        <div>
                        <img src = "images/sunset-icon.png" className='sunset-image'/>
                        </div>
                        <div className='sunset-stats'>
                            <p>Sunset</p>
                            <p>7:50 pm</p>   
                        </div>
                    </div>
                    <br>
            </br>
            <br>
            </br>


                </div>

                <div className='uv-sunrise'>
                    <div className='uv'>
                        <div>
                        <img src = "images/sunshine-icon.png" className='uv-image'/>
                        </div>
                        <div className='uv-stats'>
                            <p>UV Index</p>
                            <p>0 of 10</p>   
                        </div>
                    </div>

                    <div className='sunrise'>
                        <div>
                        <img src = "images/sunrise-icon.png" className='sunrise-image'/>
                        </div>
                        <div className='sunrise-stats'>
                            <p>Sunrise</p>
                            <p>6:35 pm</p>   
                        </div>
                    </div>



                </div>

                






            </div>
        </form>
    )
}
export default Landing;