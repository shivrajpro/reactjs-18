import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsList from './components/ItemsList';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList items={items} deleteItem={deleteItem} />
      </div>
      <Footer />
    </div>
  );
}

export default App;