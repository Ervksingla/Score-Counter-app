import React from "react";
import "./index.css";
export default function Home() {
  return (
    
    <div className="App">
      <div className="main">
        <div className="second" role="img">
          <img
            className="holly"
            src="https://nexgenconcierge-prod.s3.amazonaws.com/uploads/guide/logo/5dee8f2c05dc76726811c00c/5-logo.png"
          />

          <div className="grid-nav">
            <a
              className="grid-nav-item"
              id="hotel"
              href="https://ngclink.com/guide/5dee8f2c05dc76726811c00c/info"
            >
              <div className="icon-btn">
                <img
                  class="inner-img"
                  src="https://ngclink.com/packs/hotel-services-icon-4036c5262f2162df611d1523fbd002bf.png"
                ></img>
              </div>
              <h3>HOTEL SERVICES</h3>
            </a>
            <a
              className="grid-nav-item"
              id="local"
              href="/guide/5dee8f2c05dc76726811c00c/info"
            >
              <div className="icon-btn">
                <img
                  class="inner-img"
                  src="https://ngclink.com/packs/explore-local-icon-0577cec0606df00de43eed3722817769.png
                "
                ></img>
              </div>
              <h3>EXPLORE LOCAL</h3>
            </a>
            <a className="grid-nav-item" id="chat" href="sms:+12133061230">
              <div className="icon-btn">
                <img
                  class="inner-img"
                  src="https://ngclink.com/packs/text-concierge-icon-ff5f3486153af8723bb8dd51a5578a7f.png"
                  title="Chat"
                ></img>
              </div>
              <h3>CONCIERGE CHAT</h3>
            </a>
            <a className="grid-nav-item" id="call" href="tel:323-856-1970">
              <div className="icon-btn">
                <img
                  class="inner-img"
                  src="https://ngclink.com/packs/phone-icon-0f6359e0fad5b0243d652f3b05fa7682.png"
                  title="Calling"
                ></img>
              </div>
              <h3>FRONT DESK</h3>
            </a>
            <a className="grid-nav-item" id="maps" href="tel:323-856-1970">
              <div className="icon-btn">
                <img
                  class="inner-img"
                  src="https://ngclink.com/packs/explore-local-pin-icon-1d8991a49794f85adc019c3841eef2d8.png"
                  title="Maps"
                ></img>
              </div>
              <h3>TO HOTEL</h3>
            </a>
          </div>
          <div>
            <p>Powered by NexGen Guest</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
