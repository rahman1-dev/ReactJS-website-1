import { swiggyURL, imgBaseURL } from "../utils/constant";

const Cards = ({ food }) => {
  return (
    <div className="card">
      {console.log("food", `${imgBaseURL}${food?.imageId}`)}
      <img src={`${imgBaseURL}${food?.imageId}`} alt="card" />
      <h3>{food.action.text}</h3>
    </div>
  );
};

export default Cards;
