import React from 'react';

import './styles.css';

const Listing = (props) => {
    const { data } = props;

    return (
        <div className="listing">
            <header className="heading">
                <h3>{`${data.year} ${data.make} (${data.color})`}</h3>
                <span className="price">{`$${data.price}`}</span>
            </header>
            <main className="content">
                <div>
                    <img src="http://via.placeholder.com/150x150" alt="" />
                    <p>Toilet paper attack claws fluff everywhere meow miao french ciao litterbox my left donut is missing, as is my right yowling nonstop the whole night, so climb leg, and fooled again thinking the dog likes me so scratch leg; meow for can opener to feed me love to play with owner's hair tie.</p>
                </div>
                <div className="options">
                    <ul>
                        {data.hasSunroof && <li>Sun Roof <span className="checkmark"></span></li>}
                        {data.isFourWheelDrive && <li>Four Wheel Drive <span className="checkmark"></span></li>}
                        {data.hasPowerWindows && <li>Power Windows <span className="checkmark"></span></li>}
                        {data.hasNavigation && <li>Navigation <span className="checkmark"></span></li>}
                        {data.hasHeatedSeats && <li>Heated Seats <span className="checkmark"></span></li>}
                    </ul>

                    {data.hasLowMiles && <span className="low-miles">Low Miles</span>}
                </div>
            </main>
        </div>
    );
}

export default Listing;