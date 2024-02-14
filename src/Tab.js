export default function Tab({ tab, tabIndex, currTab }) {
  return (
    <div className={`heading ${tabIndex === currTab ? "active" : ""}`}>
      {tab.title}
      {/* <p> {props.tab.description} </p> */}
    </div>
  );
}
