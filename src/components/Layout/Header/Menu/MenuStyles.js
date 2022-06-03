import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 999;
`

export const SMenu = styled.div`
  position: relative;
  display: inline-block;
  background-color: transparent;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
    background-color: white;
  }
`

export const MenuButton = styled.div`
  padding: 1rem;
  
  &:hover {
    transition: 0.5s ease;
    color: var(--text-2-color);
    cursor: pointer;
  }
`

export const MenuLink = styled(Link)`
  padding: 1rem;
  
  &:hover {
    transition: 0.5s ease;
    color: var(--text-2-color);
    box-shadow: 0px 0px 10px white;
    cursor: pointer;
  }
`

export const SubRoute = styled(Link)`
  text-decoration: none;
  color: var(--text-2-color);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  text-transform: initial;

  &:hover {
    transition: 0.2s ease-in;
    background-color: var(--light-color);
  }
`
