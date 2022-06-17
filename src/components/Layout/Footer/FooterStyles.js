import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tablet } from '../../../styles/globalStyles'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--light-color);
`

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-top: 5rem;
  padding-bottom: 3rem;
`

export const FooterGrid = styled.div`
  display: grid;
  margin: 0 20rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: initial;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: var(--text-color);

  ${tablet({ alignItems: 'center', textAlign: 'center' })}
`

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1.2rem;
`

export const FooterLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: .7rem;

  &:hover {
    color: var(--text-2-color);
    transition: 0.3s ease-out;
  }
`

export const FooterContact = styled.a`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: .7rem;

  &:hover {
    color: var(--text-2-color);
    transition: 0.3s ease-out;
  }
`

export const FooterContactExtra = styled.span`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: .7rem;

  &:hover {
    color: var(--text-2-color);
    transition: 0.3s ease-out;
  }
`

export const FooterRights = styled.div`
  color: var(--text-color);
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  border-top: 1px solid var(--text-color);
  padding-top: 2rem;
  padding-bottom: 3rem;
  margin-top: 1rem;
`
