import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMenuItemByIdQuery } from "../Apis/menuItemApi";
import { useNavigate } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../Apis/shoppingCartApi";
// import { MainLoader, MiniLoader } from "../Components/Page/Common";
import { apiResponse, userModel } from "../Interfaces";
import { MainLoader, MiniLoader } from "../Components/Page/Common";
// import { toastNotify } from "../Helper";
// import { RootState } from "../Storage/Redux/store";
// import { useSelector } from "react-redux";

function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading } = useGetMenuItemByIdQuery({ id: menuItemId });
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  //   const [updateShoppingCart] = useUpdateShoppingCartMutation();
  //   const userData: userModel = useSelector(
  //     (state: RootState) => state.userAuthStore
  //   );

  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  };

  const handleAddToCart = async (menuItemId: number) => {
    //     if (!userData.id) {
    //       navigate("/login");
    //       return;
    //     }
    setIsAddingToCart(true);
    //     const response: apiResponse = await updateShoppingCart({
    //       menuItemId: menuItemId,
    //       updateQuantityBy: quantity,
    //       userId: userData.id,
    //     });

    const response = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: "b7ae37bf-09b1-4b47-9ce1-c96031d2920",
    });

    //     if (response.data && response.data.isSuccess) {
    //       toastNotify("Item added to cart successfully!");
    //     }
    setIsAddingToCart(false);
  };

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className="container pt-4 pt-md-5">
      <div className="row">
        <div className="col col-7">
          <div className="row">
            <div className="col col-12">
              <p className="h2 text-success fs-1">{data.result.name}</p>
              <p className="badge bg-dark">{data.result.category}</p>
              <p className="">{data.result.description}</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col col-12 d-flex align-items-center">
              <span className="h3 text-success">${data.result.price}</span>
              <span
                className="ms-3 px-3 py-1"
                style={{ border: "1px solid #333", borderRadius: "30px" }}
              >
                <i
                  className="bi bi-dash fs-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity(-1)}
                ></i>
                <span className="h3 mt-3 px-3 fs-1">{quantity}</span>
                <i
                  className="bi bi-plus fs-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity(1)}
                ></i>
              </span>
            </div>
          </div>
          <div className="row p-2">
            <div className="col col-6">
              <button
                className="btn btn-sm btn-success form-control"
                disabled={isAddingToCart}
                onClick={() => handleAddToCart(data.result.id)}
              >
                {isAddingToCart ? <MiniLoader/> : "Add to Cart"}
              </button>
            </div>
            <div className="col col-6">
              <button
                className="btn btn-sm btn-secondary form-control"
                disabled={isAddingToCart}
                onClick={() => navigate(-1)}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <div className="col col-5">
          <img
            src={data.result.image}
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
    //     <div className="container pt-4 pt-md-5">
    //       {!isLoading ? (
    //         <div className="row">
    //           <div className="col-7">
    //             <h2 className="text-success">{data.result?.name}</h2>
    //             <span>
    //               <span
    //                 className="badge text-bg-dark pt-2"
    //                 style={{ height: "40px", fontSize: "20px" }}
    //               >
    //                 {data.result?.category}
    //               </span>
    //             </span>
    //             <span>
    //               <span
    //                 className="badge text-bg-light pt-2"
    //                 style={{ height: "40px", fontSize: "20px" }}
    //               >
    //                 {data.result?.specialTag}
    //               </span>
    //             </span>
    //             <p style={{ fontSize: "20px" }} className="pt-2">
    //               {data.result?.description}
    //             </p>
    //             <span className="h3">${data.result?.price}</span> &nbsp;&nbsp;&nbsp;
    //             <span
    //               className="pb-2  p-3"
    //               style={{ border: "1px solid #333", borderRadius: "30px" }}
    //             >
    //               <i
    //                 onClick={() => {
    //                   handleQuantity(-1);
    //                 }}
    //                 className="bi bi-dash p-1"
    //                 style={{ fontSize: "25px", cursor: "pointer" }}
    //               ></i>
    //               <span className="h3 mt-3 px-3">{quantity}</span>
    //               <i
    //                 className="bi bi-plus p-1"
    //                 onClick={() => {
    //                   handleQuantity(+1);
    //                 }}
    //                 style={{ fontSize: "25px", cursor: "pointer" }}
    //               ></i>
    //             </span>
    //             <div className="row pt-4">
    //               <div className="col-5">
    //                 {isAddingToCart ? (
    //                   <button disabled className="btn btn-success form-control">
    //                     <MiniLoader />
    //                   </button>
    //                 ) : (
    //                   <button
    //                     className="btn btn-success form-control"
    //                     onClick={() => handleAddToCart(data.result?.id)}
    //                   >
    //                     Add to Cart
    //                   </button>
    //                 )}
    //               </div>

    //               <div className="col-5 ">
    //                 <button
    //                   className="btn btn-secondary form-control"
    //                   onClick={() => navigate(-1)}
    //                 >
    //                   Back to Home
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-5">
    //             <img
    //               src={data.result.image}
    //               width="100%"
    //               style={{ borderRadius: "50%" }}
    //               alt="No content"
    //             ></img>
    //           </div>
    //         </div>
    //       ) : (
    //         <div
    //           className="d-flex justify-content-center"
    //           style={{ width: "100%" }}
    //         >
    //           <MainLoader />
    //         </div>
    //       )}
    //     </div>
  );
}

export default MenuItemDetails;
