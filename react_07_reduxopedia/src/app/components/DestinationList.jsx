import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destinationClicked, resetDestination } from '../../redux/slice/destinationSlice';
import DestinationFact from "./DestinationFact";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destination.destinations
  );

  const dispatch = useDispatch();

  return (
    <div className="border p-2">
      <h2 className="text-success text-center">Destination List</h2>
      {destinationList.map((destination, index) => (
        <div
          className="text-center text-white row"
          style={{ borderBottom: "1px solid #333" }}
          key={index}
        >
          <div className="col-8 col-md-3 offset-md-3 pt-2">
            {destination.name}
          </div>
          <div className="col-4 col-md-2">
            <button
              className="btn btn-success form-control m-1"
              onClick={() => dispatch(destinationClicked(destination))}
            >
              Details
            </button>
          </div>
        </div>
      ))}

      <DestinationFact />
    </div>
  );
}

export default DestinationList;
