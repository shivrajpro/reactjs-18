import { useState } from "react"
import Button from "./Button";

export const AddFriend = ({onAddFriend}) => {
    const [name,setName]=useState('');

    function addFriend(evt) {
        evt.preventDefault();
        if(name && name.length){
            onAddFriend(name);
            setName('');
        }
    }
    return (
        <div>
            <h3>Add Friend</h3>
            <form onSubmit={addFriend} >
                <div>
                    <label htmlFor="friendName" >Friend Name</label>
                    <input type="text" placeholder="enter name" id="friendName" onChange={(e)=>setName(e.target.value)} value={name} />
                </div>
                {/* {name} */}
                <div>
                    <Button>Add Friend</Button>
                </div>
            </form>
        </div>
    )
}
