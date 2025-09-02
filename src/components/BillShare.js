import { useState } from "react"
import Button from "./Button"

const BillShare = ({friends, onBillPaid}) => {
    const [selectedFriend, setselectedFriend] = useState();
    const [bill, setBill]=useState();

    function submitBill(evt) {
        evt.preventDefault();
        const theFriend = friends.find((fr)=>fr.id === +selectedFriend);
        console.log('>> selectedFriend',theFriend);
        const billDetails={friendId:theFriend.id, name:theFriend.name, bill};
        onBillPaid(billDetails);
    }
    return (
        <div>
            <h3>Bill Share Details</h3>
            <form onSubmit={submitBill} >
                <p>Select friend who paid the bill</p>
                <select value={selectedFriend} onChange={(e)=>setselectedFriend(e.target.value)} >
                    <option value='' >Select Friend</option>
                    {friends.map((f)=>{
                        return <option key={f.id} value={f.id} > {f.name} </option>
                    })}
                </select>
                {selectedFriend}
                <div>
                    <label>Bill Amount</label>
                    <input placeholder="enter amount" value={bill} onChange={(e)=>setBill(e.target.value)} />
                </div>
                <div>
                    <Button>Add Bill</Button>
                </div>
            </form>
        </div>
    )
}

export default BillShare