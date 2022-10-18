import styled from 'styled-components'
import { laptop, tablet } from '../../../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 0rem 5rem;
  display: flex;

  ${tablet({ flexDirection: 'column-reverse' })}
`
export const ImgContainer = styled.figure`
  flex: 1;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  ${laptop({ justifyContent: 'center' })}
`

export const InfoContainer = styled.div`
  flex: 1;
  /* background-color: green; */
  /* padding-right: 4rem; */
`

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  max-height: 500px;

  ${laptop({ height: '90%' })}
  ${tablet({ width: '90%', paddingTop: '3rem' })}
`

export const Title = styled.h2`
  font-size: 3.7rem;
  color: var(--text-2-color);
  font-weight: 600;
  padding-bottom: 2rem;
  padding-left: 5rem;

  ${tablet({ paddingLeft: '0' })}
`
export const Parr = styled.p`
  padding-bottom: 2.5rem;
  padding-left: 5rem;
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--text-color);
  text-align: justify;
  padding-left: 5rem;

  ${tablet({ paddingLeft: '0' })}
`
