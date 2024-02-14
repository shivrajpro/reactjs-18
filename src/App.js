import { useState } from "react";
import "./App.css";
import Tab from "./Tab";
import TabDescription from "./TabDescription";

function App() {
  const [tabsData, setTabsData] = useState([
    { title: "first tab", description: "first description" },
    { title: "second tab", description: "second description" },
    { title: "third tab", description: "third description" },
  ]);
  return (
    <div className="tabs">
      <div className="tab-headings">
        {tabsData.map((tab) => {
          return <Tab key={Math.random()} tab={tab} />;
        })}
      </div>
      <div>
        {tabsData.map((tab) => {
          return <TabDescription key={Math.random()} description={tab.description} />;
        })}
      </div>
    </div>
  );
}

export default App;
