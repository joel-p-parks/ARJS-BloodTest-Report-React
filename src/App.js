import React from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/tabulardataexport";

function App() {
  return (
    <div id="viewer-host">
      <Viewer report={{ Uri: 'BloodTestResults.rdlx-json' }} />
    </div>
  );
}

export default App;