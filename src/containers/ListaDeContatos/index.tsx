import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>1 contato marcado como: &quot;categoria&quot; e &quot;{termo}&quot;</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              prioridade={c.prioridade}
              info={c.info}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
