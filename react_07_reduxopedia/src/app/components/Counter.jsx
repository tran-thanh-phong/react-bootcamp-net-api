import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementMultiplier, decrementMultiplier } from "../../redux/store";
import { increment } from "../../redux/store";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [multipler, setMutiplier] = useState(0);

  return (
    <div
      className=" mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter : {count}</div>
      <div className="row">
        <div className=" p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
        <div className=" p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                    type="test"
                    placeholder="multipler..."
                    className="form-control"
                    value={multipler}
                    onChange={(e) => setMutiplier(e.target.value)}
                ></input>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-primary form-control"
                  onClick={() => dispatch(incrementMultiplier(multipler))}
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-danger form-control"
                  onClick={() => dispatch(decrementMultiplier(multipler))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
