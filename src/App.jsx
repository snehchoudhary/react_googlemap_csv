import React, { useState } from "react";
import MapView from "./Components/MapView";
import CSVUploader from "./Components/CSVUploader";
import CheckboxComponent from "./Components/Checkbox";


function App() {
  const [markers, setMarkers] = useState([]);

  // New
  // const [previewData, setPreviewData] = useState([]);
  // const [chartData, setChartData] = useState([]);

  return (
    <div>
      <h1>CSV to Google Map</h1>
      <CSVUploader setMarkers={setMarkers} 
      
      // New
      // setPreviewData={setPreviewData}
      // setChartData={setChartData}
      />

      <MapView markers={markers} />

      <CheckboxComponent/>

      {/* New */}
      {/* {chartData.length > 0 && (
        <ChartComponent data={chartData}/>
      )} */}
    </div>
  );
}

export default App;
