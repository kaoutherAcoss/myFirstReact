import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

class App1 extends React.Component {
  state = {
    Clients: [{ id: 1, nom: "kaouther" }]
  };
  render() {
    const title = "mes cliens liste";
    const elems = this.state.Clients.map(client => (
      <li>
        {client.id} {client.nom} <button onClick={this}>X</button>
      </li>
    ));
    return (
      <div>
        <h1>{title}</h1>
        <ul>{elems}</ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  rootElement
);
