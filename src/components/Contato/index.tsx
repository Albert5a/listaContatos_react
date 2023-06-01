import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { excluir, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, prioridade, info: infoOriginal, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [info, setInfo] = useState('')

  useEffect(() => {
    if (infoOriginal.length > 0) {
      setInfo(infoOriginal)
    }
  }, [infoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setInfo(infoOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Info
        disabled={!estaEditando}
        value={info}
        onChange={(evento) => setInfo(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    prioridade,
                    info
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir onClick={() => dispatch(excluir(id))}>
              Excluir
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
