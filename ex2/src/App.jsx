import React, { Component } from "react";
import ServerLog from "./ClassComps/Serverlog";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogs: true
    };
  }

  toggleLogs = () => {
    this.setState((prevState) => ({
      showLogs: !prevState.showLogs
    }));
  };

  render() {
    return (
      <div 
        style={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
          textAlign: "center"
        }}
      >
        <h2>Server Monitor</h2>

<button
  onClick={this.toggleLogs}
         style={{
                borderRadius: "8px",
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                fontWeight: 500,
                fontFamily: "aria, sans-serif",
    backgroundColor: this.state.showLogs ? "#eb635fff" : "#5cb85c", // red / green
                cursor: "pointer",
                transition: "border-color 0.25s"
 
            }}
>

  {this.state.showLogs ? "Hide Logs" : "Show Logs"}

</button>

        {this.state.showLogs && <ServerLog />}
      </div>
    );
  }
}

export default App;
