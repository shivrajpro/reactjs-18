import { useState } from "react"
import Button from "./Button"

const BillShare = ({ friends, onBillPaid }) => {
    const [selectedFriendId, setSelectedFriendId] = useState('');
    const [billAmount, setBillAmount] = useState('');

    function submitBill(evt) {
        evt.preventDefault();
        const theFriend = friends.find((fr) => fr.id === +selectedFriendId);
        console.log('>> selectedFriend', theFriend);
        const billDetails = { friendId: theFriend.id, name: theFriend.name, billAmount };
        onBillPaid(billDetails);
    }
    return (
        <div>
            <h3>Bill Share Details</h3>
            <form onSubmit={submitBill} >
                <p>Select friend who paid the bill</p>
                <select value={selectedFriendId} onChange={(e) => setSelectedFriendId(e.target.value)} >
                    <option value='' >Select Friend</option>
                    {friends.map((f) => {
                        return <option key={f.id} value={f.id} > {f.name} </option>
                    })}
                </select>
                {selectedFriendId}
                <div>
                    <label>Bill Amount</label>
                    <input placeholder="enter amount" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
                </div>
                <div>
                    <Button>Add Bill</Button>
                </div>
            </form>
        </div>
    )
}

export default BillShare