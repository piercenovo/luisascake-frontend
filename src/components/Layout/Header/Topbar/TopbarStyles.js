import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile, tablet } from '../../../../styles/globalStyles'

export const Container = styled.section`
  background-color: var(--accent-color-4);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  padding: 1rem 5rem;
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialItem = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const SocialLink = styled.a`
  padding-right: 1rem;


`
export const SocialTitle = styled.span`
  font-size: 1.22rem;
  font-weight: 500;

  ${tablet({ display: 'none' })}
`

export const AccountTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`
export const Slash = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  padding-left: .5rem;
  padding-right: .5rem;

  ${mobile({ display: 'none' })}
`

export const AccountLink = styled(Link)`

  &:first-child{
  margin-right: 0.5rem;
  }

  &:nth-child(2n){
    ${mobile({ display: 'none' })}
  }

  /* &:last-child{
    ${mobile({ display: 'none' })}
  } */
`
