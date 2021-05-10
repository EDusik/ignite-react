import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { api } from "../services/apiClient";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { useCan } from "../hooks/useCan";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({ 
    roles: ["administrator", "editor"]
  });

  useEffect(() => {
    api.get("/me")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Dashboard {user?.email}</h1>
      {userCanSeeMetrics && <div>Métricas</div> }
    </>
  )
}

export const getServerSideProps = withSSRAuth(async(ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {}
  }
});
