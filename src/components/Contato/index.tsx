import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Contato'

type Props = {
  nome: string
  prioridade: enums.Prioridade
  info: string
}

const Contato = ({ nome, prioridade, info }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Info value={info} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir>Excluir</S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
