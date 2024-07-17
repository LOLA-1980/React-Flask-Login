import React from 'react';

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.petco.com.mx/medias/04-Desk27a30May24.png?context=bWFzdGVyfE1vc2FpY29NWHw0NDEzNTR8aW1hZ2UvcG5nfGhjMC9oMTMvMTA4MjcwNDg1ODMxOTgvMDRfRGVzazI3YTMwTWF5MjQucG5nfDRkOWU5YTA3ZjdlOWRmNDgzZmIzOWJhM2NmODY0ZWQ1OTczMjFjMmZiZDcyM2MzNjRiMDhkMDQ2NjYyZDVlOTM" alt="First slide" className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.petco.com.mx/medias/05-Desk-27a30May24.png?context=bWFzdGVyfE1vc2FpY29NWHw2NTcxMTZ8aW1hZ2UvcG5nfGg5Ni9oMGYvMTA4MjcwNDg0MTkzNTgvMDVfRGVza18yN2EzME1heTI0LnBuZ3xkMWExNmE2NGRhNjU5ZTM4YTA4NGI1YTFmMjg3ZWRlNThmNjgxNTY0OWQ1M2Y2OTNhMDk1YTAxODdhOTU4N2U1" alt="Second slide" className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.petco.com.mx/medias/03Desk27a30May24.png?context=bWFzdGVyfE1vc2FpY29NWHw2ODY5NTl8aW1hZ2UvcG5nfGhmZS9oMTIvMTA4MjcwNDg1MTc2NjIvMDNEZXNrMjdhMzBNYXkyNC5wbmd8OTA0MTM0Y2RmZTg5YTczZTIwOGNlNDRiOTkxMDk2NzYzN2M5ZjlhOGE0MTJkMWRhNzczMmU4MjY1Mjc1MDY0Yw" alt="Third slide" className="d-block w-100" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

//export default Carousel;
