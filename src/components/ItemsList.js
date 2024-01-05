import SingleItem from './SingleItem';

export default function ItemsList(props) {
//   console.log('ItemsList',props);  
  return (
    <div>
      <h3>Items List</h3>
      {props.items.map(i=>{
        return <SingleItem key={i.id} item={i}  />
      })}
    </div>
  );
}