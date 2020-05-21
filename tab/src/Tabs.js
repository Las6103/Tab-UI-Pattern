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
          lorem ipsum
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={brawlingBear}>
          lorem ipsum
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={elderPineBrewing}>
          lorem ipsum
        </button>
      </div>
      <div className="col">
        <button className="buttons" onClick={waredacaBrewing}>
          lorem ipsum
        </button>
      </div>
    </div>
  );
}

export default Tabs;
