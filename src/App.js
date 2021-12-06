import { useState } from 'react';
import { Tasks, HeisenhowerTable, TimeNavigation } from "./components";
import "./App.css";

// TODO: filter work/personal tasks, a view for each and combined
// TODO: translations
// TODO: responsive
// TODO: snap tasks to their grid. 
// TODO: what to do next view and a view that will make the grid being more of a graph clearer.

function App() {
  const [timestamp, syncTimestamp] = useState(new Date().getTime());
  
  return (
    <div className="App">
      <TimeNavigation onChange={syncTimestamp}/>
      <HeisenhowerTable />
      <Tasks timestamp={timestamp}/>
      <quote>
        <i>
          "What is important is seldom urgent and what is urgent is seldom
          important."
        </i>{" "}
        <br />
        <span>Dwight D. Eisenhower, 34th President of the United States</span>
      </quote>
    </div>
  );
}

export default App;
