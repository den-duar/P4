import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const url = 'http://localhost:8080/api/v1/customers'

const Customers = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const data = await res.json()

            setUsuarios(data)
        }
        fetchData()
    }, [])

    const handleDeleteUsuario = async (documentNumber) => {
        try {
            const response = await fetch(`${url}/${documentNumber}`, {
                method: "DELETE"
            });
            console.log(response);
            alert('Deletado com sucesso!')
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        <h1>Clientes</h1>
        <ul>
            {
                usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <h2>{usuario.name}</h2>
                        <h2>{usuario.phoneNumber}</h2>
                        <button onClick={() => handleDeleteUsuario(usuario.documentNumber)}>Deletar</button>
                        <button>
                        <Link to={`/customers/${usuario.documentNumber}`}>
                        Editar
                        </Link>
                    </button>
                    </li>
                ))
            }
        </ul>

        <Link to='/customers/create'>Criar</Link>
    </div>
  )
}

export default Customers