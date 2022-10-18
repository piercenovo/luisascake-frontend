import styled from 'styled-components'
import { desktop } from '../../../../styles/globalStyles'

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 3.4rem;
  padding: 0rem 5rem;
  ${desktop({ flexDirection: 'column-reverse' })}
`

export const Main = styled.main`
  flex-grow: 1;
  min-height: 800px;
  ${desktop({ minHeight: '100%' })}
`

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem .5rem 1.5rem 0rem;
  
`
export const Filter = styled.div`
  
`
export const FilterText = styled.span`
  font-size: 1.6rem;
  margin-right: 1.2rem;
  color: var(--text-color);
`

export const Select = styled.select`
  padding: .7rem;
  outline: none;
  cursor: pointer;
  border: 2px solid var(--accent-color-3);
  border-radius: 5px;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.6rem;
`
export const Option = styled.option`
  cursor: pointer;
`
