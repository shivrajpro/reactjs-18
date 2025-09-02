import { useState } from "react";
import "./App.css";
import { AddFriend } from "./components/AddFriend";
import BillShare from "./components/BillShare";
import FriendsList from "./components/FriendsList";


function App() {
  const [friends, setFriends]=useState([]);

  function addFriend(name) {
    setFriends((friends)=>[...friends, {id:Date.now(), name, billDetails:{}}]);
  }
  console.log('>> friends',friends);
  
  function onBillPaid(billDetails) {
    console.log('>> bill details',billDetails);
    
  }
  return (
    <div>
      <AddFriend onAddFriend={addFriend} />
      <BillShare friends={friends} onBillPaid={onBillPaid} />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
