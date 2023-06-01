import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Prioridade.FAMILIA}
            criterio="prioridade"
            legenda="familia"
          />
          <FiltroCard
            valor={enums.Prioridade.AMIGO}
            criterio="prioridade"
            legenda="amigos"
          />
          <FiltroCard
            valor={enums.Prioridade.CLIENTE}
            criterio="prioridade"
            legenda="cliente"
          />
          <FiltroCard criterio="todos" legenda="todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
