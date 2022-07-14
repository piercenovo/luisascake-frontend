import styled from 'styled-components'
import { tablet } from '../../styles/globalStyles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 6rem 0;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-right: 5rem;
  padding-left: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `

export const Top = styled.div`
  width: 100%;
  `

export const CardTableContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid var(--accent-color-2);
`

export const TheadWrapper = styled.thead`
  display: flex;
  width: 100%;

  ${tablet({ display: 'none' })}
`
export const TheadRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color-2);
  width: 100%;
  height: 5rem;
`
export const TheadColumn = styled.th`
  flex: 1;
  color: var(--white-color);
  font-weight: 500;

  &:first-child {
    flex: 3;
  }

  &:last-child {
    flex: 0.5;
  }
`
