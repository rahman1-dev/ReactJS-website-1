const ResCards = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={resData.img} alt="res-img" />
      </div>
      <div className="res-det">
        <h3 className="res-name">{resData.name}</h3>
        <h4 className="price">{resData.rupeesForPerson}</h4>
        <h4 className="rating">⭐Rating:{resData.rating}</h4>
        <h2 className="location">{resData.location}</h2>
      </div>
    </div>
  );
};
export default ResCards;
