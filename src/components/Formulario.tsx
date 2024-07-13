import React from "react";
import Botao from "./Botao";

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Adicione um novo estudo:</label>
          <input
            type="text"
            name="task"
            placeholder="O que voce quer estudar?"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo de estudo:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <div>
          <label htmlFor="Nome">Nome do aluno</label>
          <input type="text" name="Nome" placeholder="Seu Nome" required />
        </div>
        <div>
          <Botao />
        </div>
      </form>
    );
  }
}

export default Formulario;
