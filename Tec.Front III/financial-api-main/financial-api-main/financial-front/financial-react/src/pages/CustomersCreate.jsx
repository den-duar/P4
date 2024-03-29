import { useState, useEffect } from 'react';

const CustomersCreate = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensal, setMensal] = useState('');
  const [end, setEnd] = useState('');
  const [num, setNum] = useState('');
  const [zipCode, setZipCode] = useState('');
  const url = 'http://localhost:8080/api/v1/customers';

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };

  const handleTelefone = (event) => {
    setTelefone(event.target.value);
  };

  const handleMensal = (event) => {
    setMensal(event.target.value);
  };

  const handleEnd = (event) => {
    setEnd(event.target.value);
  };

  const handleNum = (event) => {
    setNum(event.target.value);
  };
  
  const handleZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const handleAddCliente = async (event) => {
    event.preventDefault();
    let objetoLiteral = {
      name: nome,
      documentNumber: cpf,
      phoneNumber: telefone,
      monthlyIncome: mensal,
      address: {street: end, number: num, zipCode: zipCode}
    };
    const cliente = JSON.stringify(objetoLiteral);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: cliente
      });
      console.log(response);
      alert("Criado com sucesso!")
      window.location.href = 'http://localhost:5173/customers'
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <form onSubmit={handleAddCliente}>
        <label>
          Nome:
          <input name='name' type='text' onChange={handleNome} />
        </label>
        <br />
        <label>
          CPF:
          <input name='documentNumber' type='text' onChange={handleCpf} />
        </label>
        <br />
        <label>
          Telefone:
          <input name='phoneNumber' type='text' onChange={handleTelefone} />
        </label>
        <br />
        <label>
          Salario Mensal:
          <input name='monthlyIncome' type='text' onChange={handleMensal} />
        </label>
        <br />
        <label>
          Rua:
          <input name='address' type='text' onChange={handleEnd} />
        </label>
        <br />
        <label>
          Numero:
          <input name='number' type='text' onChange={handleNum} />
        </label>
        <br />
        <label>
          Cep:
          <input name='zipCode' type='text' onChange={handleZipCode} />
        </label>
        <br />
        <button type='submit'>
            Enviar</button>
      </form>
    </div>
  );
};

export default CustomersCreate;