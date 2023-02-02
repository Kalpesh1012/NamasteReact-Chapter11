import { IMG_CDN_LINK } from "../config";
import { useContext } from "react";
import UserContext from "./UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
  avgRating,
}) => {
  const { userinfo } = useContext(UserContext);

  return (
    <div className="p-3 m-3 w-64 h-80 overflow-auto hover:border-4">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{lastMileTravel} KM</h4>
      <h4>
        {userinfo.name}-{userinfo.email}
      </h4>
    </div>
  );
};

export default RestaurantCard;
