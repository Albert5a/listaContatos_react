import Contato from '../../components/Contato'
import { Container } from './styles'

import * as enums from '../../utils/enums/Contato'

const contatos = [
  {
    nome: 'Júlia',
    info: 'julijuli2103@gmail.com - 31972991534',
    prioridade: enums.Prioridade.FAMILIA,
  },
  {
    nome: 'Gustavo',
    info: 'gustavo@gmail.com - 31971425399',
    prioridade: enums.Prioridade.AMIGO,
  },
  {
    nome: 'Bruna',
    info: 'bruna@gmail.com - 31934271599',
    prioridade: enums.Prioridade.CLIENTE,
  },
]

const ListaDeContatos = () => (
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

export default ListaDeContatos
