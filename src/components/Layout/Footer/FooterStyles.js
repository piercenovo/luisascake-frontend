import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tablet } from '../../../styles/globalStyles'

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
`

export const FooterWrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--text-2-color);
    transition: 0.3s ease-out;
  }
`

export const FooterContact = styled.a`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--text-2-color);
    transition: 0.3s ease-out;
  }
`

export const FooterRights = styled.div`
  color: var(--text-color);
  margin-bottom: 16px;
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  border-top: 1px solid var(--text-color);
  padding: 1rem 0;
  margin-top: 1rem;
`
