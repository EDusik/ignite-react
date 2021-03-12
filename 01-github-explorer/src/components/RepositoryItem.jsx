export const RepositoryItem = ({repository}) => {
  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url} target="_blank">
        Acessar repositório
      </a>    
    </li>
  )
}