import styled from 'styled-components'
import { desktop, mobile, tablet } from '../../styles/globalStyles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  padding-right: 5rem;
  padding-left: 5rem;
  margin-top: 2rem;
  margin-bottom: 6rem;

  ${tablet({ flexDirection: 'column' })}
  `
export const ImgContainer = styled.div`
  flex: 1;
  background-color: var(--accent-color-2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem 6rem 1rem;
  ${tablet({ padding: '6rem 1rem 2rem 1rem' })}
`

export const Image = styled.img`
  width: 80%;
  object-fit: cover;
  border:  14px solid white;

  &:hover{
    cursor: pointer;
  }

  ${tablet({ width: '65%' })}
  ${mobile({ width: '70%', border: '9px solid white' })}
`

export const InfoContainer = styled.div`
  flex: 1;
  width: 100%;
  background-color: var(--accent-color-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${({ imgStart }) => (imgStart ? 'end' : 'start')};
  padding: ${({ imgStart }) => (imgStart ? '2.5rem 5rem 2.5rem 0' : '2.5rem 0 2.5rem 5rem')};
  align-items: ${({ imgStart }) => (imgStart ? 'flex-end' : 'flex-start')};
  min-height: 40rem;

  ${tablet({ padding: '0rem 8rem 4rem 8rem', textAlign: 'center', alignItems: 'center' })}
`
export const Title = styled.h1`
  font-size: 3.8rem;
  text-transform: uppercase;
  color: var(--white-color);
  font-weight: 600;
  ${desktop({ fontSize: '3.6rem' })}
`
export const Desc = styled.p`
  margin: 1.5rem 0 2.5rem 0;
  font-size: 1.9rem;
  font-weight: 300;
  letter-spacing: 3px;
  color: var(--white-color);
  padding-left: 0rem;
  ${desktop({ fontSize: '1.7rem' })}
`
