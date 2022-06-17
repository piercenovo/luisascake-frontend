import styled from 'styled-components'
import { desktop, tablet } from '../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fbf0f4; */
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 7rem;
  margin-bottom: 4rem;
  padding: 0rem 5rem;
  display: flex;

  ${tablet({ flexDirection: 'column' })}
`
export const ImgContainer = styled.figure`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  ${desktop({ justifyContent: 'center' })}
`

export const InfoContainer = styled.div`
  flex: 1.2;
`

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  max-height: 500px;

  ${tablet({ width: '90%', paddingTop: '3rem' })}
`

export const Title = styled.h2`
  font-size: 3.7rem;
  color: var(--text-2-color);
  font-weight: 600;
  padding-bottom: 2rem;
`
export const Parr = styled.p`
  padding-bottom: 2rem;
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--text-color);
  text-align: justify;
  padding-right: 5rem;

  ${tablet({ paddingRight: '0' })}
`

export const Welcome = styled.p`
  padding-bottom: 2rem;
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--text-color);
  text-align: justify;

`
