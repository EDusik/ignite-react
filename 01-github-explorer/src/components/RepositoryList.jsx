import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss";

// https://api.github.com/users/EDusik

const repository = {
  name: "unform",
  description: "repo do unform",
  link: "https://github.com/EDusik"
}

export const RepositoryList = () => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EDusik/repos")
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))
        }
      </ul>
    </section>
  )
}