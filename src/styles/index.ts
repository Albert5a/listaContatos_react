import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal

// #0000FF #120a8f #50008b
