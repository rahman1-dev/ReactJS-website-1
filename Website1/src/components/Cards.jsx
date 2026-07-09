const Cards = ({ food }) => {
  return (
    <div className="card">
      <img src={food.img} alt="card" />
      <h3>{food.title}</h3>
    </div>
  );
};
export default Cards;
