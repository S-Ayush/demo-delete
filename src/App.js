import logo from "./logo.svg";
import "./App.css";
import calander from "./icaal.ics";
import { useEffect } from "react";

function App() {
  const download = (file) => {
    const link = document.createElement("a");
    // create file and use it here
    link.setAttribute("href", file);
    link.setAttribute("download", "ics.ics");
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.history.back();
  };

  useEffect(() => {
    download(calander);
  }, []);
  return <div className="App"></div>;
}

export default App;
