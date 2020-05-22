import React from "react";
import "./Tabs.css";

function Tabs({
  greeneGrowlers,
  brawlingBear,
  elderPineBrewing,
  waredacaBrewing,
}) {
  return (
    <div className="row">
      <div className="col">
        <button className="buttons active" onClick={greeneGrowlers}>
          Greene Growlers
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={brawlingBear}>
          Brawling Bear
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={elderPineBrewing}>
          Elder Pine Brewing
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={waredacaBrewing}>
          Waredaca Brewing
        </button>
      </div>
    </div>
  );
}

export default Tabs;
