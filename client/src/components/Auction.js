import React from 'react'

function Auction({auction}) {
    const plane = require("../../src/assets/icons/plane.png");
    const more = require("../../src/assets/icons/more.png");
    const moreHover = require("../../src/assets/icons/more2.png");
  
    return (
        <a href={`auction/${auction._id}`}>
        <div id="result">
          <div id="header1">
            <div id="trip">
              <h2>{auction.origin}</h2>
              <img className="planeIcon" alt="plane icon" src={plane} />
              <h2>{auction.destination}</h2>
            </div>

            <div id="costDetail">
              <h2>${auction.currentBid}</h2>
              <img
                className="icon default"
                id="moreBtn"
                alt="more button"
                src={more}
              />
              <img
                className="icon hover"
                id="moreBtn"
                alt="more button hover"
                src={moreHover}
              />
            </div>
          </div>

          <div id="planeImg1">
            <div id="header2">
              <h3>{auction.flightNum}</h3>
              <h3>{auction.cabinSize}</h3>
              <h3>{new Date(+auction.flightDate).toLocaleDateString()}</h3>
            </div>
          </div>
        </div>
      </a>


    )
}

export default Auction
