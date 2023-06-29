import React from "react";
import { useGetAllDestinationQuery } from "../../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content = <p>Ok</p>;

  if (isLoading) {
    content = <p>loading...</p>;
  } else if (isSuccess) {
    content = <p>Success</p>;
        content = data.map((destination) => {
          return (<Destination destination={destination} key={destination.id} />);
        });
  } else if (isError) {
    content = <p>{error?.error}</p>;
    console.log(error);
  } else {
    content = <p>Nothing!!!</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
