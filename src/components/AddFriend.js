import { useState } from "react"

export const AddFriend = ({setFriends}) => {
    const [name,setName]=useState('');

    function onAddFriend(evt) {
        evt.preventDefault();
        setFriends(name);
    }
    return (
        <div>
            <h3>Add Friend</h3>
            <form onSubmit={onAddFriend} >
                <div>
                    <label htmlFor="friendName" >Friend Name</label>
                    <input type="text" placeholder="enter name" id="friendName" onChange={(e)=>setName(e.target.value)} value={name} />
                </div>
                {/* {name} */}
                <div>
                    <button>Add Friend</button>
                </div>
            </form>
        </div>
    )
}
