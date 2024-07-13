import React from "react";

class Botao extends React.Component {
  render() {
    return (
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "10%",
          padding: "5px",
        }}
      >
        Botão
      </button>
    );
  }
}

export default Botao;
