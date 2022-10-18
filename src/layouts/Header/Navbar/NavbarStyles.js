import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tablet } from '../../../styles/globalStyles'

export const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  cursor: pointer;
  display: none;

  ${tablet({ display: 'inline' })}
  
`

export const Nav = styled.nav`
  background-color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const NavbarContainer = styled.div`
  padding: 1rem;
  height: 60px;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  ${tablet({ display: 'none' })}
`

export const SNavbarBrand = styled.h2`
  font-size: 3rem;
`

export const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`

export const CenterNav = styled.div`
  display: flex;
  gap: 2rem;
`

export const NavRoutes = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  text-transform: uppercase;
`

export const NavRoute = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5rem;
  transition: 0.5s ease;
  font-weight: semibold;

  &:hover {
    transition: 0.5s ease;
    color: var(--text-2-color);
  }
`

export const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    cursor: pointer;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 30px;
`

export const HeaderContainer = styled.header`

`
