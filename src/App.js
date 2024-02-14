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

  const [currTab, setCurrTab] = useState(0);

  const description = tabsData[currTab].description;

  return (
    <div className="tabs">
      <div className="tab-headings">
        {tabsData.map((tab, index) => {
          return (
            <div key={Math.random()} onClick={() => setCurrTab(index)}>
              <Tab tab={tab} tabIndex={index} currTab={currTab} />
            </div>
          );
        })}
      </div>
      <div>
        <TabDescription>
          {description}
        </TabDescription>
      </div>
    </div>
  );
}

export default App;
