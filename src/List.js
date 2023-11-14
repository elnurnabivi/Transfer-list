import Item from "../src/Item";

function List({ items, handleToggle }) {
  return (
    <div className="list flex">
      {items.map((item) => {
        return <Item item={item} key={item} handleToggle={handleToggle} />;
      })}
    </div>
  );
}

export default List;
