import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile, tablet } from '../../../../styles/globalStyles'

export const SNavbarBrand = styled.h2`
  font-size: 3rem;
`
export const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  ${tablet({ backgroundColor: 'rgba(0, 0, 0, .6)' })}
`
export const SDrawer = styled.div`
  z-index: 170;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: var(--light-color);
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
  display: none;

  ${tablet({ width: '50%', display: 'inline' })}
  ${mobile({ width: '60%' })}
`

export const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`
export const NavRoutes = styled.div``
export const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: var(--text-color);
  font-size: 2.1rem;
  font-weight: 500;
  padding: 0.5rem;
`

export const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
    cursor: pointer;
  }
`

export const SearchContainer = styled.div`
  border: .23rem solid transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.5rem;
  margin-right: 2rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 0 .8rem;
  border: .23rem solid #fff;
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  &:focus-within{
    border: .23rem solid var(--accent-color-3);
    transition: all 0.3s ease-in-out;
  }
`
export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 1.9rem;
  color: var(--text-2-color);
  padding: 10px 10px;
  background: transparent;
  transition: border-color 0.2s;
  width: 100%;
`
