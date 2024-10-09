import "./App.css";

/**
 * Main component of the application.
 * Renders the overall structure of the app, including the header, body, and grid container.
 */
function App() {
  return (
    <div className="parent-container">
      {/* Header */}
      <div className="header-container">
        <header className="app-header">
          <h1>box breathing</h1>
          <h2>just breathe...</h2>
        </header>
      </div>
      {/* Body */}
      <div className="body-container"></div>
      <div className="grid-container">
          <div className="cell" id="cell1"></div>
          <div className="cell" id="cell2"></div>
          <div className="cell" id="cell3"></div>
          <div className="cell" id="cell4"></div>
          <div className="cell" id="cell5"></div>
          <div className="cell" id="cell6"></div>
          <div className="cell" id="cell7"></div>
          <div className="cell" id="cell8"></div>
          <div className="cell" id="cell9"></div>
          <div className="cell" id="cell10"></div>
          <div className="cell" id="cell11"></div>
          <div className="cell" id="cell12"></div>
          <div className="cell" id="cell13"></div>
          <div className="cell" id="cell14"></div>
          <div className="cell" id="cell15"></div>
          <div className="cell" id="cell16"></div>
        </div>
      </div>
  );
}

export default App;
