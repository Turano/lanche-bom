import "./styles";

export const InfoPessoal = () => {
    return (
      <>
        <h2>Informações do Pedido</h2>
        <p>Nome*:</p>
        <input type='text' placeholder='Ex: João da Silva'></input>
        <p>Celular*:</p>
        <input type='phone' placeholder='(00)00000-0000'></input>
      </>
    );
  };