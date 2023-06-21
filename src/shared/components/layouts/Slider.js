const Slider = () => {
    return (
        <>
            {/*	Slider	*/}
            <div id="slide" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#slide" data-slide-to={0} className="active" />
                    <li data-target="#slide" data-slide-to={1} />
                    <li data-target="#slide" data-slide-to={2} />
                    <li data-target="#slide" data-slide-to={3} />
                    <li data-target="#slide" data-slide-to={4} />
                    <li data-target="#slide" data-slide-to={5} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img class="d-block w-100" src="images/SL1.jpg" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img  class="d-block w-100" src="images/SL2.jpg" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img class="d-block w-100" src="images/SL3.jpg" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img class="d-block w-100" src="images/SL4.jpg" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img class="d-block w-100" src="images/SL5.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img class="d-block w-100" src="images/SL6.png" alt="Vietpro Academy" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#slide" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#slide" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
            {/*	End Slider	*/}
        </>
    )
}

export default Slider;