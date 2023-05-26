import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Júlia',
      enums.Prioridade.FAMILIA,
      '31 31313131 - julijuli@gmail.com',
      1
    ),
    new Contato(
      'Gustavo',
      enums.Prioridade.AMIGO,
      '31 31313131 - gustavo@gmail.com',
      2
    ),
    new Contato(
      'Bruna',
      enums.Prioridade.CLIENTE,
      '31 31313131 - bruna@gmail.com',
      3
    ),
  ],
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    },
  },
})

export const { excluir } = contatosSlice.actions

export default contatosSlice.reducer
