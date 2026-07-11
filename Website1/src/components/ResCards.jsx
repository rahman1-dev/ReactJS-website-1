import { imgBaseURL } from "../utils/constant";

const ResCards = ({ resData }) => {
  const {
    name,
    areaName,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={`${imgBaseURL}${cloudinaryImageId}`} alt={name} />
      </div>

      <div className="res-det">
        <h3 className="res-name">{name}</h3>

        <h4 className="price">{costForTwo}</h4>

        <h4 className="rating">⭐ {avgRating}</h4>

        <h4 className="cuisines">{cuisines.join(", ")}</h4>

        <h4 className="sla">{sla.deliveryTime} min</h4>

        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default ResCards;
