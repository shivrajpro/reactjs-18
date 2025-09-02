import { useState } from "react";
import "./App.css";
import { AddFriend } from "./components/AddFriend";
import BillShare from "./components/BillShare";
import FriendsList from "./components/FriendsList";


function App() {
  const [friends, setFriends] = useState([]);

  function addFriend(name) {
    setFriends((friends) => [...friends, { id: Date.now(), name, billDetails: [] }]);
  }
  console.log('>> friends', friends);

  function onBillPaid(billDetails) {
    console.log('>> bill details', billDetails);
    setFriends((friends) => getFriendsWithCalculatedBill(friends, billDetails));
  }
  // [
  //   {
  //     "id": 1756833399900,
  //     "name": "shivraj",
  //     "billDetails": []
  //   }
  // ]
  // {
  //     "friendId": 1756833399900,
  //     "name": "shivraj",
  //     "billAmount": "200"
  // }
  function getFriendsWithCalculatedBill(friends, billDetails) {
    const newFriends = [];
    const shareAmount = (+billDetails.billAmount) / friends.length;

    for (const friend of friends) {
      const theFriend = { ...friend };
      if (friend.id === billDetails.friendId) {
        newFriends.push(friend);
        continue;
      }

      const billings = [];
      let billFound = false;
      if (friend.billDetails.length) {
        for (const billing of friend.billDetails) {
          if (billing.friendId === billDetails.friendId) {
            billFound = true;
            billings.push({
              ...billing,
              shareAmount: billing.shareAmount + shareAmount
            });
          } else {
            billings.push(billing);
          }
        }
      }

      if (!billFound) {
        billings.push({ friendId: billDetails.friendId, name: billDetails.name, shareAmount });
      }

      theFriend['billDetails'] = billings;
      newFriends.push(theFriend);
    }

    console.log('>> newFriends', newFriends, ' >> shareAmount', shareAmount);

    return newFriends;
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
