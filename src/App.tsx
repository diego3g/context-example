import { useState } from "react"
import { CasesContext } from "./contexts/CasesContext"
import { List } from "./pages/List"
import { Register } from "./pages/Register"

function App() {
  const [cases, setCases] = useState(['Caso 1', 'Caso 2'])

  function createNewCase(title: string) {
    setCases(state => [...state, title]);
  }

  return (
    <>
      <CasesContext.Provider value={{ cases, createNewCase }}>
        <List />
        <Register />
      </CasesContext.Provider>
    </>
  )
}

export default App
