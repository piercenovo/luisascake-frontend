import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../../styles/globalStyles'

export const Sidebar = styled.aside`
  background-color: var(--light-color);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-width: 298px;

  ${mobile({ minWidth: '0px' })}
`
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem 2.4rem;
`

export const SearchContainer = styled.div`
  border: .23rem solid transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 .8rem;
  background-color: #fff;
  height: 35px;
  border: .23rem solid #fff;
  transition: all 0.3s ease-in-out;

  &:focus-within{
    border: .23rem solid var(--accent-color-3);
    transition: all 0.3s ease-in-out;
  }

`
export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 1.6rem;
  padding: 10px 10px;
  background: transparent;
  transition: border-color 0.2s;
  width: 100%;
  color: var(--text-2-color);

  &::placeholder{
    color: var(--text-2-color);
    opacity: 0.7;
  }
`

export const Title = styled.p`
  color: var(--text-2-color);
  font-size: 2.1rem;
  font-weight: 500;
  margin-top: 2rem;
`

export const Price = styled.span`
  color: var(--text-color);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1.6rem;
`

export const CategoryContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding-top: 1.4rem;
  padding-bottom: 1rem;
`
export const CategoryLink = styled(Link)`
  display: flex;
  font-size: 1.7rem;
  color: var(--text-color);
  padding-top: 1rem;
  padding-left: 2.2rem;
`
export const CategoryTitle = styled.li`
`
