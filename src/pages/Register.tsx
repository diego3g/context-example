import { FormEvent, useContext, useState } from "react"
import { CasesContext } from "../contexts/CasesContext";

export function Register() {
  const [title, setTitle] = useState('');
  const { createNewCase } = useContext(CasesContext);

  function handleRegisterCase(event: FormEvent) {
    event.preventDefault();

    // const newCase = {
    //   title,
    // }

    createNewCase(title);

    // history.push('/list');
  }

  return (
    <form onSubmit={handleRegisterCase}>
      <input value={title} onChange={e => setTitle(e.target.value)} />

      <button type="submit">Enviar</button>
    </form>
  )
}