import React, { useState, useEffect } from "react";
import { useGetMenuItemsQuery } from '../../../Apis/menuItemApi';
import { menuItemModel } from "../../../Interfaces";
import MenuItemCard from "./MenuItemCard";
import { useDispatch } from 'react-redux';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { MainLoader } from "../Common";

function MenuItemList() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }

  }, [isLoading]);

  if (isLoading) {
    return <MainLoader/>;
  }

  return (
    <div className="container row text-warning">
      {data?.result?.length > 0 &&
        data.result.map((item, index) => (
          <MenuItemCard menuItem={item} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
