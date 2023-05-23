import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="familia" contador={1} />
        <FiltroCard legenda="amigos" contador={2} />
        <FiltroCard legenda="profissão" contador={3} />
        <FiltroCard legenda="todos" contador={6} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
