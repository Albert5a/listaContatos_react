import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'todos'
  valor?: enums.Prioridade
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos',
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
  },
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
