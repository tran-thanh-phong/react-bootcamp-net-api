import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (state) => state.destination.destinationSelected
  );

  if (!selectedDestination) {
    return (
      <div className="text-center text-warning pt-4">Select a Destination</div>
    );
  } else {
    return (
      <div className="text-center border p-3 m-3">
        <h4 className="text-success">{selectedDestination.name}</h4>
        Days Recommened : {selectedDestination.days} <br />
        Fun Fact : {selectedDestination.fact}
      </div>
    );
  }
}

export default DestinationFact;
