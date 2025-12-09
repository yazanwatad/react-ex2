import React, { Component } from "react";

export default class ServerLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: []
    };

    this.logId = 1;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const newLog = {
        id: this.logId++,
        message: "Server Check OK",
        timestamp: new Date().toLocaleTimeString()
      };

      console.log("Interval running, adding log:", newLog);

      this.setState((prevState) => {
        const updatedLogs = [...prevState.logs, newLog];

        // Limit: Keep ONLY the last 10 logs
        if (updatedLogs.length > 10) {
          updatedLogs.shift(); // remove the oldest item
        }

        return { logs: updatedLogs };
      });
    }, 2000);
  }

  componentWillUnmount() {
    console.log("ServerLog UNMOUNTED, clearing interval");
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.header}>Server Logs</h3>

        {this.state.logs.length === 0 ? (
          <p style={styles.empty}>No logs yet...</p>
        ) : (
          this.state.logs.map((log) => (
            <div key={log.id} style={styles.logItem}>
              <div style={styles.time}>{log.timestamp}</div>
              <div style={styles.msg}>{log.message}</div>
            </div>
          ))
        )}
      </div>
    );
  }
}

//Some Styles! 

const styles = {
  container: {
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "20px",
    width: "300px",
    background: "#f9f9f9",
    fontFamily: "Arial"
  },
  header: {
    margin: "0 0 10px 0",
    color: "#333"
  },
  empty: {
    color: "#888",
    fontStyle: "italic"
  },
  logItem: {
    background: "white",
    padding: "8px",
    borderRadius: "5px",
    marginBottom: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    display: "flex",
        justifyContent:" space-between"

  },
  time: {
    fontWeight: "bold",
    color: "#555"
  },
  msg: {
    color: "#333"
  }
};
