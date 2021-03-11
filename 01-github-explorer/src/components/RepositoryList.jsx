const repositoryName = "unform";

export const RepositoryList = () => {
  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <string>{repositoryName}</string>
          <p>Forms in React</p>
          <a href="/">
            Acessar Repositório
          </a>
        </li>
      </ul>
    </section>
  )
}