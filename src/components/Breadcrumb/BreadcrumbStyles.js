import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { laptop } from '../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf0f4;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CrumbContainer = styled.div`
margin-bottom: 1.5rem;
display: flex;
`
export const TitleContainer = styled.div`

`
export const Title = styled.h1`
  font-size: 6rem;
  text-transform: capitalize;
  letter-spacing: -1px;
  color: var(--text-2-color);
  font-weight: 500;
  text-align: center;

  ${laptop({ fontSize: '5.4rem' })}
`

export const CrumbLink = styled(Link)`
  margin-bottom: 1.5rem;
`

export const Crumb = styled.div`
  margin-bottom: 1.5rem;
`
export const TextCrumb = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: 0.2s ease-out;
  color: var(--primary-color);
  
  &:first-child{
    color: var(--text-color);
  }

  &:hover{
    color: var(--primary-color);
    transition: 0.2s ease-out;
  }
`
export const Slash = styled.span`
padding-left: 1rem;
padding-right: 1rem;
color: var(--primary-color);
font-weight: 600;
`
