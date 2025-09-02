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
  
  return (
    <div>
      <AddFriend setFriends={addFriend} />
      <BillShare />
      <FriendsList />
    </div>
  );
}

export default App;
