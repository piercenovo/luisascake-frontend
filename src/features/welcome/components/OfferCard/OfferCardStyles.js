import styled from 'styled-components'
import { mobile } from '../../../../styles/globalStyles'

export const ImgContainer = styled.figure`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`

export const Image = styled.img`
  width: 40%;
  transition: all 0.3s ease-in-out;
`

export const Container = styled.div`
  width: 284px;
  height: 270px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${props => props.bg};
  margin-bottom: 3rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  transition: all 0.3s ease-in-out;


  ${mobile({ width: '254px', height: '240px' })}

  &:hover {
   background-color: ${props => props.bghover};
   transition: all 0.3s ease-in-out;
  }

  &:hover ${Image} {
    transform: scale(1.05);
   transition: all 0.3s ease-in-out;
  }

`

export const InfoContainer = styled.div`
  width: 100%;
  flex: 1;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-2-color);
`
export const Title = styled.p`
  font-size: 2rem;
  line-height: 25px;
`

export const Span = styled.p`
  font-size: 2rem;
`
