import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContexts"

export const Private = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1>Private Page</h1>
      Olá {auth.user?.name}
    </div>
  )
}