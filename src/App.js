import logo from "./logo.svg";
import "./App.css";
import file from "./icaal.ics";
import { useEffect } from "react";

function App() {
  const download = (data, filename) => {
    debugger;
    const _data = JSON.stringify(data);
    const link = document.createElement("a");

    link.setAttribute("href", file);
    link.setAttribute("download", filename || "ics.ics");
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.history.back();
  };

  useEffect(() => {
    download({
      name: "John Doe",
      email: "john@doe.com",
      phone: "+1 234 567",
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
