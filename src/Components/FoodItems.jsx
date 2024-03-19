const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} healthyItem={item} />
      ))}
    </ul>
  );
};
