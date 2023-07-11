// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useInitiatePaymentMutation } from "../../../Apis/paymentApi";
// import { inputHelper } from "../../../Helper";
// import { apiResponse, cartItemModel } from "../../../Interfaces";
// import { RootState } from "../../../Storage/Redux/store";
// import { MiniLoader } from "../Common";
// import { useNavigate } from "react-router";

// export default function CartPickUpDetails() {
//   const [loading, setLoading] = useState(false);
//   const shoppingCartFromStore: cartItemModel[] = useSelector(
//     (state: RootState) => state.shoppingCartStore.cartItems ?? []
//   );
//   const userData = useSelector((state: RootState) => state.userAuthStore);

//   let grandTotal = 0;
//   let totalItems = 0;
//   const initialUserData = {
//     name: userData.fullName,
//     email: userData.email,
//     phoneNumber: "",
//   };
//   shoppingCartFromStore?.map((cartItem: cartItemModel) => {
//     totalItems += cartItem.quantity ?? 0;
//     grandTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
//     return null;
//   });
//   const navigate = useNavigate();
//   const [userInput, setUserInput] = useState(initialUserData);
//   const [initiatePayment] = useInitiatePaymentMutation();
//   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const tempData = inputHelper(e, userInput);
//     setUserInput(tempData);
//   };

//   useEffect(() => {
//     setUserInput({
//       name: userData.fullName,
//       email: userData.email,
//       phoneNumber: "",
//     });
//   }, [userData]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const { data }: apiResponse = await initiatePayment(userData.id);

//     navigate("/payment", {
//       state: { apiResult: data?.result, userInput },
//     });
//   };

//   return (
//     <div className="border pb-5 pt-3">
//       <h1 style={{ fontWeight: "300" }} className="text-center text-success">
//         Pickup Details
//       </h1>
//       <hr />
//       <form onSubmit={handleSubmit} className="col-10 mx-auto">
//         <div className="form-group mt-3">
//           Pickup Name
//           <input
//             type="text"
//             value={userInput.name}
//             className="form-control"
//             placeholder="name..."
//             name="name"
//             onChange={handleUserInput}
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           Pickup Email
//           <input
//             type="email"
//             value={userInput.email}
//             className="form-control"
//             placeholder="email..."
//             name="email"
//             onChange={handleUserInput}
//             required
//           />
//         </div>

//         <div className="form-group mt-3">
//           Pickup Phone Number
//           <input
//             type="number"
//             value={userInput.phoneNumber}
//             className="form-control"
//             placeholder="phone number..."
//             name="phoneNumber"
//             onChange={handleUserInput}
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           <div className="card p-3" style={{ background: "ghostwhite" }}>
//             <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
//             <h5>No of items : {totalItems}</h5>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-lg btn-success form-control mt-3"
//           disabled={loading || shoppingCartFromStore.length == 0}
//         >
//           {loading ? <MiniLoader /> : "Looks Good? Place Order!"}
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { cartItemModel, userModel, apiResponse } from "../../../Interfaces";
import { RootState } from "../../../Storage/Redux/store";
import { useSelector } from "react-redux";
import { inputHelper } from "../../../Helper";
import { MiniLoader } from '../../Page/Common';
import { useInitiatePaymentMutation } from '../../../Apis/paymentApi';
import { useNavigate } from 'react-router-dom';

function CartPickUpDetails() {
  const cartItems: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  const [initiatePayment] = useInitiatePaymentMutation();
  const navigate = useNavigate();

  const userData: userModel = useSelector((state: RootState) => state.userAuthStore ?? ({} as userModel));

  const initialUserData = {
    name: userData.fullName,
    email: userData.email,
    phoneNumber: "",
  };

  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState(initialUserData);
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  console.log(initialUserData, userInput);

  let grantTotal = 0;
  let noOfItems = 0;

  cartItems.map((cartItem: cartItemModel) => {
    grantTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
    noOfItems += cartItem.quantity ?? 0;
    return null;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(userInput);

    const { data }: apiResponse = await initiatePayment(userData.id);

    console.log(data);

    navigate("/payment", {
      state: {
        apiResult: data?.result,
        userInput
      }
    });

    setLoading(false);
  };

  return (
    <div className="border rounded">
      <h2 className="text-center text-success mt-3">Pickup Details</h2>
      <hr />
      <form className="col-10 mx-auto" onClick={handleSubmit}>
        <div className="form-group m-3">
          Pickup Name
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            name="name"
            required
            value={userInput.name}
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group m-3">
          Pickup Email
          <input
            type="text"
            className="form-control"
            placeholder="Email..."
            name="email"
            required
            value={userInput.email}
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group m-3">
          Pickup Phone Number
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number..."
            name="phoneNumber"
            required
            value={userInput.phoneNumber}
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group m-3">
          <div className="border bg-light rounded p-3">
            <span>
              Grand Total: <b>${grantTotal}</b>
            </span>
            <br />
            <span>
              No of items: <b>{noOfItems}</b>
            </span>
          </div>
        </div>
        <div className="form-group m-3">
          <button
            type="submit"
            className="btn btn-success btn-sm form-control p-2"
          >
            {loading ? <MiniLoader/> : "Looks Good? Place Order!"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CartPickUpDetails;
