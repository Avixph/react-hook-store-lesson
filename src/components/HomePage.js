function HomePage({
  saleItem,
  editable,
  toggleEditSaleItem,
  handleItemOnsale,
}) {
  return (
    <div>
      <h1>My Hardware Store</h1>
      <div>
        <span>Currently On Sale: {saleItem}</span>
        <span>
          <button onClick={toggleEditSaleItem}>
            {editable ? "hide" : "Edit Sale Item"}{" "}
          </button>
        </span>
        <div>
          {editable ? (
            <div>
              <input onChange={handleItemOnsale} type="text" value={saleItem} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
