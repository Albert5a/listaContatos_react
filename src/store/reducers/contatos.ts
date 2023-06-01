import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Julia',
      prioridade: enums.Prioridade.FAMILIA,
      info: '31976453628 - juli@gmail.com'
    },
    {
      id: 2,
      nome: 'Gustavo',
      prioridade: enums.Prioridade.AMIGO,
      info: '31983647628 - gugu@gmail.com'
    },
    {
      id: 3,
      nome: 'Bruna',
      prioridade: enums.Prioridade.CLIENTE,
      info: '31993465789 - bruna@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { excluir, editar } = contatosSlice.actions

export default contatosSlice.reducer
