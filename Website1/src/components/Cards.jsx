import { swiggyURL } from "../utils/constant";

const Cards = ({ food }) => {
  // console.log(`${swiggyURL}${food.imageId}`);
  // console.log(food.imageId);
  return (
    <div className="card">
      <img src={`${swiggyURL}${food?.imageId}`} alt="card" />
      <h3>{food.action.text}</h3>
    </div>
  );
};
export default Cards;
