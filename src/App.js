import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage.js";

function App() {
  const [itemOnSale, setItemOnSale] = useState("A Hammer");
  const [editable, setEditable] = useState(true);

  const toggleEditSaleItem = (event) => setEditable(!editable);

  const handleItemOnsale = (event) => {
    const itemOnSale = event.target.value;
    setItemOnSale(itemOnSale);
  };

  return (
    <div className="App">
      <HomePage
        saleItem={itemOnSale}
        editable={editable}
        toggleEditSaleItem={toggleEditSaleItem}
        handleItemOnsale={handleItemOnsale}
      />
    </div>
  );
}

export default App;
