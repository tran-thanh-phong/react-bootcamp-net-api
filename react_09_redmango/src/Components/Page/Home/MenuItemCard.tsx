import React, { useState } from "react";
import { menuItemModel } from "../../../Interfaces";
import { Link } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../../../Apis/shoppingCartApi";
import { MiniLoader } from "../Common/index";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

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
      updateQuantityBy: 1,
      userId: "b7ae37bf-09b1-4b47-9ce1-c96031d2920",
    });

    //     if (response.data && response.data.isSuccess) {
    //       toastNotify("Item added to cart successfully!");
    //     }
    setIsAddingToCart(false);
  };

  return (
    <div className="col col-md-4 col-12 p-2">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          {props.menuItem.specialTag && (
            <i
              className="bi bi-star btn btn-sm bg-success text-white"
              style={{ position: "absolute", left: "15px", top: "15px" }}
            >
              &nbsp;{props.menuItem.specialTag}
            </i>
          )}

          {isAddingToCart ? (
            <div style={{position: "absolute", top: "15px", right: "15px"}}>
              <MiniLoader/>
            </div>
          ) : (
            <i
              className="bi bi-cart-plus btn btn-sm border-danger text-danger"
              style={{ position: "absolute", right: "15px", top: "15px" }}
              onClick={() => handleAddToCart(props.menuItem.id)}
            ></i>
          )}

          <div className="row col-10 offset-1 p-4 text-center">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
              <img
                className="w-100 mt-5 image-box"
                src={props.menuItem.image}
                style={{ borderRadius: "50%" }}
              />
            </Link>
          </div>

          <div className="text-center">
            <p className="card-title text-success m-0 fs-3">
              <Link
                to={`/menuItemDetails/${props.menuItem.id}`}
                className="text-success"
                style={{ textDecoration: "none" }}
              >
                {props.menuItem.name}
              </Link>
            </p>
            <p className="badge bg-secondary fs-7">{props.menuItem.category}</p>
            <p className="card-text">{props.menuItem.description}</p>
          </div>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
