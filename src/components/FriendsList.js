import BillDetails from "./BillDetails"

const FriendsList = ({ friends }) => {
    return (
        <div>
            <h3>Friends List</h3>
            <ul>
                {friends.map((frnd) => {
                    return <li key={frnd.id}>
                        <h4> {frnd.name} </h4>
                        <BillDetails frndName={frnd.name} details={frnd.billDetails} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default FriendsList