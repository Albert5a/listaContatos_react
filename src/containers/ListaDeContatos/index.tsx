import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>1 contato marcado como: &quot;categoria&quot;</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
