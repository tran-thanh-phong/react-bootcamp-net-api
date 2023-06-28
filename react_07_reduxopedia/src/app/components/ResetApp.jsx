import React from "react";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../../redux/action/actions";

function ResetApp() {
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetReduxOPedia())}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
