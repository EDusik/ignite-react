import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: "unform",
  description: "repo do unform",
  link: "https://github.com/EDusik"
}

export const RepositoryList = () => {
  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  )
}