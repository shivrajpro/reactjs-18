import './App.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemsList from './components/ItemsList';
import Footer from './components/Footer';  
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    // console.log('>> e',item);
    setItems((items)=>{
      const newItems = [...items];
      newItems.push(item);
      return newItems
    })
  }


  return (
    <div>
      <Header />
      <div className="container">
        <AddItem itemAdded={onAddItem} />
        <ItemsList items={items} />
      </div>
      <Footer />
    </div>
  );
}

export default App;