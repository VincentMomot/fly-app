import React, { useState } from "react";
import AuctionMap from "../components/AuctionMap";
import AuctionButton from "../components/AuctionButton";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_BID, SAVE_FLIGHT } from "../utils/mutations";
import { QUERY_AUCTION } from "../utils/queries";
import Timer from "../components/Timer";

function AuctionDetail() {
  const watch = require("../../src/assets/icons/watch.png");
  const watchHover = require("../../src/assets/icons/watch2.png");
  const plane = require("../../src/assets/icons/plane.png");
  const pathArray = window.location.pathname.split("/");
  const auctionId = pathArray[pathArray.length - 1];
  const { loading, data } = useQuery(QUERY_AUCTION, {
    variables: { _id: auctionId },
  });
  const auctionData = data?.auction || {};

  return (
    <div>
      {loading ? (
        <p>Loading .....</p>
      ) : (
        <div className="auction">
          <div className="auctionDetail">
            <div id="myPlane">
              <img
                alt="plane"
                className="plane"
                src={`/images/planes/${auctionData.image}`}
              />
            </div>

            <div id="auctionHeader">
              <div id="trip">
                <h2>{auctionData.origin}</h2>
                <img className="planeIcon" alt="plane icon" src={plane} />
                <h2>{auctionData.destination}</h2>
              </div>
              <div id="timerBlock">
                <h2>CLOSING:</h2>
                <div id="countdown">
                  <Timer auctionEndDate={+auctionData.auctionEndDate} />
                </div>
              </div>
            </div>
            <AuctionMap />
            <div id="auctionBody">
              <div className="auctionBodyColumn">
                <div className="auctionRow">
                  <h3>Date:</h3>
                  {new Date(+auctionData.flightDate).toLocaleDateString()}
                </div>
                <div className="auctionRow">
                  <h3>Time:</h3>
                  {new Date(+auctionData.flightDate).toLocaleTimeString()}
                </div>
                <div className="auctionRow">
                  <h3>Aircraft:</h3>
                  {auctionData.aircraft}
                </div>

                <div className="auctionRow">
                  <h3>Flight Num:</h3>
                  {auctionData.flightNum}
                </div>

                <div className="auctionRow">
                  <h3>Cabin Size:</h3>
                  {auctionData.cabinSize}
                </div>

                <div className="auctionRow">
                  <h3>Operator:</h3>
                  {auctionData.operator}
                </div>
              </div>
              <div className="auctionBodyColumn">
                <div className="leadingBidContainer">
                  Leading Bid:
                  <div id="leadingBid">
                    <h2>${auctionData.currentBid}</h2>
                  </div>
                </div>
                <div className="termsContainer">
                  <input type="checkbox" id="termsConfirm"></input>
                  <h3>
                    Agree to <a href="/termsandcondtions">Terms+Conditions</a>
                    {auctionData.termsConfirm}
                  </h3>
                </div>
                <div className="serviceContainer">
                  Service Detail:
                  <a id="addServiceLink" href="/servicedetail">
                    Read More
                  </a>
                </div>
                <li>In-flight attendence available.</li>
                <li>Bar stocked with non-alcoholic beverages.</li>
              </div>
            </div>
            <div className="bidHistory">
              <div id="bidHeader">Bid History</div>
              <div className="otherBid">
                <h5>Username</h5>
                <h5>Time Stamp</h5>
                <h5>Bid Amount</h5>
              </div>
              <div className="otherBid">
                <h5>Username</h5>
                <h5>Time Stamp</h5>
                <h5>Bid Amount</h5>
              </div>
              <div className="otherBid">
                <h5>Username</h5>
                <h5>Time Stamp</h5>
                <h5>Bid Amount</h5>
              </div>
            </div>
            <div className="watchOption">
              <a href="/watchlist">
                <img
                  id="watchIcon"
                  className="icon default"
                  alt="watch"
                  src={watch}
                />
                <img
                  id="watchIcon2"
                  className="icon hover"
                  alt="watch hover"
                  src={watchHover}
                />
              </a>
              <h2>Watch this Auction </h2>
            </div>
            <AuctionButton auctionData={auctionData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AuctionDetail;
