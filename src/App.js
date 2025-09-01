import "./App.css";
import { AddFriend } from "./components/AddFriend";
import BillShare from "./components/BillShare";
import FriendsList from "./components/FriendsList";


function App() {

  return (
    <div>
      <AddFriend />
      <BillShare />
      <FriendsList />
    </div>
  );
}

export default App;
