import React from "react";
import Papa from "papaparse";

function CSVUploader({ setMarkers}) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const validData = results.data.filter(
          (row) =>
            row.Latitude &&
            row.Longitude &&
            !isNaN(parseFloat(row.Latitude)) &&
            !isNaN(parseFloat(row.Longitude))
        );

        const latLngArray = validData.map((row) => ({
          lat: parseFloat(row.Latitude),
          lng: parseFloat(row.Longitude),
        }));

        setMarkers(latLngArray);
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

export default CSVUploader;
