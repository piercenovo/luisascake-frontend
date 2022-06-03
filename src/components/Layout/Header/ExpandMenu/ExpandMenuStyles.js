import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
`
export const SMenu = styled.div``

export const MenuButton = styled.div`
  font-size: 1.8rem;
  padding: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color);
  cursor: pointer;
`

export const SubRoute = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2px;

  &:hover {
    transition: 0.2s ease-in;
    color: var(--text-2-color);
    background-color: var(--light-color);
  }
`
