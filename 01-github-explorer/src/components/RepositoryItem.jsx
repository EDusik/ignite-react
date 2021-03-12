export const RepositoryItem = (props) => {
  return (
    <div>
       <li>
          <strong>{props.repository?.name ?? "Default"}</strong>
          <p>{props.repository?.description}</p>
          <a href={props.repository?.link} target="_blank">
            {props.repository?.link}
          </a>    
      </li>
    </div>
  )
}