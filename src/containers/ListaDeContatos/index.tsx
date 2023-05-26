import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>1 contato marcado como: &quot;categoria&quot;</p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato nome={c.nome} prioridade={c.prioridade} info={c.info} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
