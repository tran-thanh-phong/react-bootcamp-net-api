import React from "react";
import { menuItemModel } from "../../../Interfaces";
import { Link } from "react-router-dom";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
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

          <i
            className="bi bi-cart-plus btn btn-sm border-danger text-danger"
            style={{ position: "absolute", right: "15px", top: "15px" }}
          ></i>

          <div className="row col-10 offset-1 p-4 text-center">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
              <img
                src={props.menuItem.image}
                style={{ height: "200px", borderRadius: "50%" }}
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
