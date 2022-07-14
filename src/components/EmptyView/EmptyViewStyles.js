import styled, { keyframes } from 'styled-components'
import { desktop, tablet } from '../../styles/globalStyles'

const move = keyframes`
0% {
  transform: translateY(-7px);
}
50% {
  transform: translateY(12px);
}
100% {
  transform: translateY(-7px);
}
`

export const Main = styled.main`
  flex-grow: 1;
  ${desktop({ minHeight: '100%' })}
`

export const EmptyViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem .5rem 1.5rem 0rem;
  
`

export const ImgContainer = styled.figure`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background-color: red; */
  flex: 1;
`

export const Image = styled.img`
  width: 50%;
  animation: ${move} 2.5s ease infinite;

  ${tablet({ width: '25%' })}
`

export const InfoContainer = styled.div`
  /* background-color: blue; */
  flex: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3rem;
`

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: var(--text-2-color);

  ${tablet({ fontSize: '2.5rem', textAlign: 'center' })}

`
