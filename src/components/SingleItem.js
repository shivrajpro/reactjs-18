export default function SingleItem(props) {
    // console.log('SingleItem',props);
    return (
        <div key={props.item.id} className="item">
            <div>{props.item.name}</div>
            <div>{props.item.quantity}</div>
            <div>$ {props.item.price}</div>
        </div>
    );
}