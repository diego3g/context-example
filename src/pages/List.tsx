import { useContext } from "react"
import { CasesContext } from "../contexts/CasesContext"

export function List() {
  const { cases } = useContext(CasesContext)

  return <h1>{cases.join(', ')}</h1>
}