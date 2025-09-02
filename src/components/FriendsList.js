
const FriendsList = ({friends}) => {
    return (
        <div>
            <h3>Friends List</h3>
            <ul>
                {friends.map((f)=>{
                    return <li key={f.id}> {f.name} </li>
                })}
            </ul>
        </div>
    )
}

export default FriendsList