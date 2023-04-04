import Aluno from './components/Aluno'

function App() {
  const alunos = [{nome: "Joao", email: "joao@gmail.com", curso: "SPI", media: 7}, 
  {nome: "Juca", email: "juca@gmail.com", curso: "SI", media: 6.9}, {nome: "Caio", email: "caio@gmail.com", curso: "ADS", media:9}]

  return (
    <div>
      <Aluno>
      {
        alunos.map((aluno)  =>
        <>
        <p>Nome: {aluno.nome}</p>
        <p>Email: {aluno.email}</p>
        <p>Curso: {aluno.curso}</p>
        <p>Media: {aluno.media}</p>
        <p>Aprovado: {aluno.media >= 7?  "APROVADO(A)":  "REPROVADO(A)"}</p>
        </>
      )}
      </Aluno>
    </div>
  )
}

export default App
