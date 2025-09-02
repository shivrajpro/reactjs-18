
const BillDetails = ({ details, frndName }) => {
    return (
        <div>
            <ul>
                {
                    details.map((bill) => {
                        return <li key={bill.friendId} >
                            {frndName} has to pay <strong>${bill.shareAmount}</strong>
                            to <strong>{bill.name}</strong>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default BillDetails;