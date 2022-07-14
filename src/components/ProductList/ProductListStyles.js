import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(90%, 20rem), 1fr));
  gap: 1rem;
`
