import React from "react";
import "./style.css";

export default function App() {
  const [isVisible, setIsVisible] = React.useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
    <div className={`sidebar ${isVisible ? 'hidden' : 'visible'}`}>
      <h1>nithsh</h1>
      </div>
      <div>
    <h1>nithish</h1>
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
  </div>
  </>
  );
}
