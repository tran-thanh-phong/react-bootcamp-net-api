import React, { useState, useEffect } from "react";

import { menuItemModel } from "../../../Interfaces";
import MenuItemCard from "./MenuItemCard";

function MenuItemList() {
  const [menuItems, setMenuItems] = useState<Array<menuItemModel>>([]);

  useEffect(() => {
    fetch("https://redmangoapi91.azurewebsites.net/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div className="container row text-warning">
      {menuItems.length > 0 &&
        menuItems.map((item, index) => (
          <MenuItemCard menuItem={item} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
